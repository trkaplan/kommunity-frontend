import _get from 'lodash.get';
import express from 'express';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

import App from '@/containers/app';
import setupStore from '@/state/store';

let assets;
if (process.env.RAZZLE_ASSETS_MANIFEST) {
  // eslint-disable-next-line
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
}
const publicDir = process.env.RAZZLE_PUBLIC_DIR || 'public';

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(publicDir))
  .get('/*', (req, res) => {
    // STORE
    const preloadedState = { counter: 0 };
    const store = setupStore(null, preloadedState);

    const markup = renderToString(App(true, req.path));

    // Grab the initial state from our Redux store
    const finalState = store.getState();
    const cssAssetUrl = _get(assets, 'client.css');
    const jsAssetUrl = _get(assets, 'client.js');
    res.send(`
        <!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
               <title>Welcome to Razzle</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${cssAssetUrl
    ? `<link rel="stylesheet" href="${cssAssetUrl}">`
    : ''}
                ${process.env.NODE_ENV === 'production'
    ? `<script src="${jsAssetUrl}" defer></script>`
    : `<script src="${jsAssetUrl}" defer crossorigin></script>`}
          </head>
          <body>
              <div id="root">${markup}</div>
              <script>
                window.__PRELOADED_STATE__ = ${serialize(finalState)}
              </script>
          </body>
        </html>`);
  });

export default server;
