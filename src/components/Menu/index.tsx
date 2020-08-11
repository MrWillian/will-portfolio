import React from 'react';
import MenuItem from '../MenuItem';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItem title="Introdução" isActive={true} />
      <MenuItem title="Trabalhos" />
      <MenuItem title="Contato" />
    </Container>
  );
}

export default Menu;