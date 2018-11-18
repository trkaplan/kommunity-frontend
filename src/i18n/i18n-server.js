import Backend from 'i18next-node-fs-backend';
import fs from 'fs';
import i18nextMiddleware from 'i18next-express-middleware';
import path from 'path';
import options from './options';

const i18n = require('i18next');

if (!i18n.isInitialized) {
  // Make sure any symlinks in the project folder are resolved:
  // https://github.com/facebookincubator/create-react-app/issues/637
  const appDirectory = fs.realpathSync(process.cwd());
  const appSrc = path.resolve(appDirectory, 'src');

  i18n
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
      {
        ...options,
        backend: {
          loadPath: `${appSrc}/i18n/translations/{{lng}}.json`,
        },
        /*
        detection: {
          // order and from where user language should be detected
          order: ['path', 'session', 'querystring', 'cookie', 'header'],

          /* CONSIDER USING THESE OPTIONS:

          // keys or params to lookup language from
          lookupCookie: 'app-lng',
          lookupFromPathIndex: 0,
          lookupPath: 'lng',
          lookupQuerystring: 'lng',
          lookupSession: 'lng',

          // cache user language
          caches: false,

          // optional expire and domain for set cookie
          cookieExpirationDate: new Date(),
          cookieDomain: 'myDomain',
          cookieSecure: true // if need secure cookie
        },
      */
        preload: ['en-US'],
      },
    );
}

export default i18n;
