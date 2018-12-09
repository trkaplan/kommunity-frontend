import React from 'react';
import { shallow } from 'enzyme';
import Popup from '@/components/ui/popup';

describe('UI Component: <Popup />', () => {
  const wrapper = shallow(
    <Popup show={true}>
      <p>Hello World!</p>
    </Popup>,
  );

  test('has overlay', () => {
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('opacity-70'),
    ).toEqual(true);
  });
});
