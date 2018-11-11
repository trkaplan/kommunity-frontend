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
      label="label text"
      helpText="help text"
      error="error text"
      value="initial value"
    />,
  );

  const input = wrapper.find('input');

  test('sets initial value if provided', () => {
    expect(wrapper.state('value')).toBe('initial value');
  });

  test('renders Input', () => {
    expect(input.length).toEqual(1);
  });

  test('renders label', () => {
    const label = wrapper.find('.label');
    expect(label.text()).toEqual('label text');
  });

  test('renders help text', () => {
    const helpText = wrapper.find('.help-text');
    expect(helpText.text()).toEqual('help text');
  });

  test('renders error text', () => {
    const errorText = wrapper.find('.error-text');
    expect(errorText.text()).toEqual('error text');
  });

  test('renders Input with text type when no type provided', () => {
    wrapper.setProps({ type: undefined });
    expect(input.props().type).toEqual('text');
  });

  test('onChangeHandler and onChange prop is called when input changed', () => {
    const newValue = 'Your new Value';
    const args = { target: { value: 'Your new Value' } };
    input.simulate('change', args);
    expect(onChangeSpy.calledOnceWith(args));
    expect(wrapper.state('value')).toBe(newValue);
  });
});
