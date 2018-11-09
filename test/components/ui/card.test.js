import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '@/components/ui';

describe('UI Component: <Card />', () => {
  const wrapper = shallow(
    <Card shadow='md'>
      <p>I am children</p>
    </Card>,
  );

  test('has expected classname', () => {
    expect(wrapper.find('div').hasClass('shadow-md')).toEqual(true);
  });

  test('has expected children', () => {
    expect(wrapper.children().html()).toEqual('<p>I am children</p>');
  });
});
