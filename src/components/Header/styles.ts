import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;

  @media(min-width: 500px) {    
    padding: 1rem 1rem;
  }
`;

export const DrawerContainer = styled.div`

  @media(min-width: 500px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  @media(max-width: 500px) {
    display: none;
  }

  > img {
    max-width: 10rem;
    max-height: 10rem;
  }
`;
