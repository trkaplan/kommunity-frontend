import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from '@/components/ui';

describe('UI Component: <Tooltip />', () => {
  const wrapper = shallow(
    <Tooltip content="Tooltip Content">
      Hover Me!
    </Tooltip>,
  );

  const tooltip = wrapper.find('.tooltip-wrapper');

  test('renders Tooltip', () => {
    expect(tooltip.length).toEqual(1);
  });

  test('renders content', () => {
    const content = wrapper.find('.tooltip-content');
    expect(content.text()).toEqual('Tooltip Content');
  });

  test('"open" state after onMouseEnter is true', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state('open')).toBe(true);
  });

  test('"open" state after onMouseLeave is false', () => {
    wrapper.simulate('mouseleave');
    expect(wrapper.state('open')).toBe(false);
  });
});
