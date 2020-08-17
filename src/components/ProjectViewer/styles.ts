import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
`;

export const Viewer = styled.div`
  /* min-width: 80vw;
  min-height: 30vh; */
  min-width: 8rem;
  min-height: 10rem;
  background-color: var(--grey1);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--accent-color);
  text-decoration: underline;
  font-size: 0.8rem;
  cursor: pointer;

`;
