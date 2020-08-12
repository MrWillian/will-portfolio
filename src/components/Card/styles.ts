import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: center;

  max-width: 30vw;
  max-height: 30vw;

  margin: 0.5rem;
  padding: 1.5rem;
  background-color: var(--base-light);

  &.contrast {
    background-color: var(--accent-color);
  }
`;
