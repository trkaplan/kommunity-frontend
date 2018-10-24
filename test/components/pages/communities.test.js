import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import CommunityList from '@/components/pages/communities';

describe('Components: <CommunityList />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <CommunityList />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('div');
  });
});
