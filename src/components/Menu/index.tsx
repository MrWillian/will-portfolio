import React from 'react';
import MenuItem from '../MenuItem';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItem title="Introdução" link="introduction" isActive />
      <MenuItem title="Contato" link="contact" />
      <MenuItem title="Trabalhos" link="portfolio" />
    </Container>
  );
}

export default Menu;