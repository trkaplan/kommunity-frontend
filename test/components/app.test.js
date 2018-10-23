import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import App from '@/components/app';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('header');
  });
});
