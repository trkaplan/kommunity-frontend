import express from 'express';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '@/containers/app';
import configureStore from '@/state/store';

const server = express();
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

server.disable('x-powered-by').use(express.static(process.env.RAZZLE_PUBLIC_DIR));

server.get('/*', (req, res) => {
  const preloadedState = {};
  const store = configureStore(null, preloadedState);
  const finalState = store.getState();
  const markup = renderToString(App(true, req.path));

  res.send(`
            <!doctype html>
              <html lang="">
              <head>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta charSet='utf-8' />
                  <title>Slayt - Create beautiful slides in a min!</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  ${assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : ''}
                    ${process.env.NODE_ENV === 'production'
    ? `<script src="${assets.client.js}" defer></script>`
    : `<script src="${assets.client.js}" defer crossorigin></script>`}
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
