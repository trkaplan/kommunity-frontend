import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import Logout from '@/components/pages/logout';

describe('Components: <Logoutr />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('div');
  });
});
