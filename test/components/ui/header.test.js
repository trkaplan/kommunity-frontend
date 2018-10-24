import React from 'react';
import { shallow } from 'enzyme';
import UIHeader from '@/components/ui/header';

describe('Component: <UIHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UIHeader type='h1' className='testClass' text='This is h1 type header'/>,
    );
  });
  test('has classname', () => {
    expect(wrapper.html()).toContain('class="testClass"');
  });
  test('has correct tag', () => {
    expect(wrapper.html()).toContain('h1');
  });
});
