import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { I18nextProvider } from 'react-i18next';
import { shallow } from 'enzyme';
import i18n from '@/i18n';
import CommunityList from '@/components/pages/communities';

describe('Components: <CommunityList />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <CommunityList t={key => key}/>
        </I18nextProvider>
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('div');
  });
});
