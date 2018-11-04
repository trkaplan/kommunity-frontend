import { hydrate } from 'react-dom';
import App from '@/containers/app';

hydrate(
  App(),
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
