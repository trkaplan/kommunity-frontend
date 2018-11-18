/* global window */
import get from 'lodash.get';
import options from './options';

const i18n = require('i18next');

if (!i18n.isInitialized) {
  i18n.init({
    ...options,
    lng: get(window, 'i18n.lang'),
    resources: get(window, 'i18n.store'),
  });
}

export default i18n;
