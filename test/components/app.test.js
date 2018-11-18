import React from 'react';
import { Provider } from 'react-redux';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/i18n';
import setupStore from '@/state/store';
import App from '@/components/app';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const history = createMemoryHistory();
    const store = setupStore(history, {});

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <App t={key => key}/>
          </I18nextProvider>
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.html()).toContain('header');
  });
});
