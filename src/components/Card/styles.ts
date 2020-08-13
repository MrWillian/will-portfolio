import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 30vw;
  max-height: 30vh;

  margin: 0.5rem;
  padding: 1.5rem;
  border-radius: 0.2rem;
  background-color: var(--base-light);

  -webkit-box-shadow: 4px 7px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 7px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 4px 7px 10px 1px rgba(0,0,0,0.75);

  &.contrast {
    background-color: var(--accent-color);
  }

  @media(min-width: 600px) {
    min-height: 30vh;
    margin: 1rem;
  }
`;
