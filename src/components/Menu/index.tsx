import React from 'react';
import MenuItem from '../MenuItem';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <MenuItem title={t('menu.introduction')} link="introduction" isActive />
      <MenuItem title={t('menu.contact')} link="contact" />
      <MenuItem title={t('menu.jobs')} link="portfolio" />
    </Container>
  );
}

export default Menu;