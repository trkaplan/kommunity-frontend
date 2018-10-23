import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import App from '@/components/app';
import Communities from '@/components/pages/communities';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('header');
  });
  // Communities test
  test('communities render', () => {
    const wrapper = shallow(<Communities />);
    expect(wrapper.html().toContain('div'));
  });
});
