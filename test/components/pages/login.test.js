import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import Login from '@/components/pages/login';

describe('Components: <CommunityList />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('div');
  });
});
