import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import _get from 'lodash.get';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import serialize from 'serialize-javascript';

import { I18nextProvider } from 'react-i18next'; // has no proper import yet
import i18nextMiddleware from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';
import i18n from './i18n';

import App from '@/components/app';
import setupStore from '@/state/store';

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

let assets;
if (process.env.RAZZLE_ASSETS_MANIFEST) {
  // eslint-disable-next-line
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
}
const publicDir = process.env.RAZZLE_PUBLIC_DIR || 'public';

const server = express();
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      backend: {
        addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`,
        loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
      },
      preload: ['en'],
    },
    () => {
      server
        .disable('x-powered-by')
        .use(i18nextMiddleware.handle(i18n))
        .use('/locales', express.static(`${appSrc}/locales`))
        .use(express.static(publicDir))
        .get('/*', (req, res) => {
          // STORE
          const preloadedState = {};
          const history = createMemoryHistory();
          const store = setupStore(history, preloadedState);
          const context = {};
          const markup = renderToString(
            <I18nextProvider i18n={req.i18n}>
              <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                  <App />
                </StaticRouter>
              </Provider>
            </I18nextProvider>,
          );

          // Grab the initial state from our Redux store
          const finalState = store.getState();
          const cssAssetUrl = _get(assets, 'css/fonts.css');
          const jsAssetUrl = _get(assets, 'client.js');

          if (context.url) {
            res.redirect(context.url);
          } else {
            const initialI18nStore = {};
            req.i18n.languages.forEach((l) => {
              initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
            });
            const initialLanguage = req.i18n.language;

            res.status(200).send(
              `
        <!doctype html>
        <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <title>Welcome to Razzle</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${cssAssetUrl ? `<link rel="stylesheet" href="${cssAssetUrl}">` : ''}
          ${process.env.NODE_ENV === 'production'
    ? `<script src="${jsAssetUrl}" defer></script>`
    : `<script src="${jsAssetUrl}" defer crossorigin></script>`}
          <script>
            window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
            window.initialLanguage = '${initialLanguage}';
          </script>
        </head>
        <body class="font-sans font-normal text-black">
          <div id="root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(finalState)}
            </script>
        </body>
      </html>`,
            );
          }
        });
    },
  );

export default server;
