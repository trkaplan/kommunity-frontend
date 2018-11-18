// eslint-disable-next-line import/no-mutable-exports
let i18n;

if (process.env.NODE_ENV === 'test') {
  i18n = {
    t: key => key,
  };
} else if (process.env.BUILD_TARGET === 'client') {
  // eslint-disable-next-line global-require
  i18n = require('./i18n-client');
} else {
  // eslint-disable-next-line global-require
  i18n = require('./i18n-server');
}

module.exports = i18n;
