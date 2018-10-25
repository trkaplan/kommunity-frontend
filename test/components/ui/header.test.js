import React from 'react';
import { shallow } from 'enzyme';
import UIHeader from '@/components/ui/header';

describe('Component: <UIHeader />', () => {
  const wrapper = shallow(
    <UIHeader type='h1' className='testClass' text='TITLE'/>,
  );
  test('has classname', () => {
    expect(wrapper.html()).toContain('class="testClass"');
  });
  test('has correct tag', () => {
    expect(wrapper.html()).toContain('h1');
  });
  test('has text', () => {
    expect(wrapper.text()).toBe('TITLE');
  });
});
