import React from 'react';
import PropTypes from 'prop-types';
import { Title, Paragraph } from '@/components/ui';
import { withNamespaces } from 'react-i18next';

const HomeHero = ({ t }) => (
  <div className="flex py-6 px-4">
    <div className="self-center">
      <Title type="h3">
        {t('homehero.title')}
      </Title>
      <Paragraph extraClassName="mt-4">
        All your communities, apps, and contacts in one big platform.
      </Paragraph>
    </div>
    <div>
      <img alt="hero" src="https://via.placeholder.com/500x300" />
    </div>
  </div>
);
HomeHero.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withNamespaces('translations')(HomeHero);
