import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import Home from '@/components/pages/home';

describe('Components: <CommunityList />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('div');
  });
});
