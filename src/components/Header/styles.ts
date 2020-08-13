import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
`;

export const DrawerContainer = styled.div`

  @media(min-width: 500px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`

  @media(max-width: 500px) {
    display: none;
  }
`;
