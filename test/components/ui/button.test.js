import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UIButton from '@/components/ui/button';

describe('Component: <UIButton />', () => {
  const onClickSpy = sinon.spy();

  const wrapper = shallow(
    <UIButton type='primary' size='medium' onClick={onClickSpy} label='button-text'/>,
  );

  const button = wrapper.find('.button');

  test('renders button', () => {
    expect(button.length).toEqual(1);
  });

  test('onClick is called when clicked', () => {
    button.simulate('click');
    expect(onClickSpy.callCount).toEqual(1);
  });

  test('has text', () => {
    expect(button.text()).toBe('button-text');
  });
});
