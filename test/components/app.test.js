import React from 'react';
import { Provider } from 'react-redux';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import setupStore from '@/state/store';
import App from '@/components/app';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const history = createMemoryHistory();
    const store = setupStore(history, {});

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.html()).toContain('header');
  });
});
