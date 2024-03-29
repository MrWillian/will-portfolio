import React from 'react';
import MenuItem from '../MenuItem';
import { useTranslation } from 'react-i18next';
import I18n from '../I18n/I18n';

import { Container } from './styles';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MenuItem title={t('menu.introduction')} link="introduction" isActive />
      <MenuItem title={t('menu.contact')} link="contact" />
      <MenuItem title={t('menu.jobs')} link="portfolio" />
      <I18n />
    </Container>
  );
}

export default Menu;
