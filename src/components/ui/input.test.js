import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Input } from '@/components/ui';

describe('UI Component: <Input />', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(
    <Input
    type="text"
    extraClassName="w-6/12 mt-4 rounded-lg"
    placeholder="Search for existing communities, type in your keyword"
    onChange={onChangeSpy}
    label={'label text'}
    caption={'caption text'}
    error={'error text'}
    value={''}
  />,
  );

  const input = wrapper.find('input');
  test('Mounted correctly', async () => {
    await wrapper.setProps({ value: 'initial value' });
    expect(wrapper.state('value')).toBe('initial value');
  });

  test('renders Input', () => {
    expect(input.length).toEqual(1);
  });

  test('renders label', () => {
    const label = wrapper.find('.ui-input__label');
    expect(label.text()).toEqual('label text');
  });

  test('renders caption', () => {
    const caption = wrapper.find('.ui-input__caption');
    expect(caption.text()).toEqual('caption text');
  });

  test('renders error text', () => {
    const errorText = wrapper.find('.ui-input__error-text');
    expect(errorText.text()).toEqual('error text');
  });

  test('renders Input with text type when no type provided', () => {
    wrapper.setProps({ type: undefined });
    expect(input.props().type).toEqual('text');
  });

  test('onChangeHandler and onChange prop is called when input changed', () => {
    input.simulate('change', { target: { value: 'Your new Value' } });
    expect(wrapper.state('value')).toBe('Your new Value');
    expect(onChangeSpy.calledOnce).toBe(true);
  });
});
