import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import App from '@/components/app';
import CommunitiesList from '@/components/pages/communities';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('header');
  });
  // TODO move to its own file
  test('renders communities component correctly', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <CommunitiesList />
      </MemoryRouter>,
    );
    expect(wrapper.html().toContain('div'));
  });
});
