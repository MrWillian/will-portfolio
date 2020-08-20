import React from 'react';
import Menu from '../Menu';
import ResponsiveDrawer from '../ResponsiveDrawer';

import Logo from '../../assets/images/logo.png';

import { 
  Container, DrawerContainer, MenuContainer 
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      
      <DrawerContainer>
        <ResponsiveDrawer />
      </DrawerContainer>

      <MenuContainer>
        <img src={Logo} alt="logo" />
        
        <Menu />
      </MenuContainer>
      
    </Container>
  );
}

export default Header;
