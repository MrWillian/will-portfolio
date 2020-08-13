import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  min-width: 30vw;
  min-height: 50vh;

  background-color: var(--grey2);
  border-radius: 0.5rem;
  -webkit-box-shadow: 4px 7px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 7px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 4px 7px 10px 1px rgba(0,0,0,0.75);

  @media(min-width: 800px) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
