import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import App from '$/components/app';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html(), '', 'should ...');
  });
});
