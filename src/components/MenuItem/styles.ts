import styled from 'styled-components';

export const Container = styled.a`
  cursor: pointer;
  text-decoration: none;

  @media(min-width: 500px) {    
    margin: 0.3rem;
  }

  @media(min-width: 600px) {    
    margin: 1rem;
  }

  @media(min-width: 900px) {    
    margin: 1.5rem;
  }
`;
