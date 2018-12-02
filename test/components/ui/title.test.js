import React from 'react';
import { shallow } from 'enzyme';
import { Title } from '@/components/ui';

describe('UI Component: <Header />', () => {
  const wrapper = shallow(
    <Title type='h1'>
      title
    </Title>,
  );

  test('has correct tag', () => {
    expect(wrapper.html()).toContain('h1');
  });

  test('has text', () => {
    expect(wrapper.text()).toBe('title');
  });
});
