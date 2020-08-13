import React from 'react';
import Menu from '../Menu';
import ResponsiveDrawer from '../ResponsiveDrawer';

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
        <div className="logo">
          
        </div>
        <Menu />
      </MenuContainer>
      
    </Container>
  );
}

export default Header;