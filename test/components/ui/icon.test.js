import { Camera } from 'react-feather';
import { Icon } from '@/components/ui';
import React from 'react';
import { shallow } from 'enzyme';

describe('UI Component: <Icon />', () => {
  const wrapper = shallow(
    <Icon name="camera" className="my-6" custom="random" />,
  );

  test('renders icon correctly', () => {
    expect(wrapper.find(Camera).length).toBe(1);
  });

  test('renders icon with props passed', () => {
    expect(wrapper.find(Camera).props().custom).toBe('random');
  });
});
