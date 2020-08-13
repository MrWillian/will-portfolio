import styled from 'styled-components';

export const Container = styled.div`
  grid-area: portfolio;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem 2rem;
  background-color: var(--base-color);

  position: relative;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -12rem;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  width: 5vw;
  margin-right: 5px;
`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  color: var(--accent-color);
  text-decoration: underline;
  font-size: 1rem;

  margin-top: 2rem;
`;

export const ExploreMoreContainer = styled.div`
  margin-top: 7rem;
`;

export const ExploreMoreHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ExploreMoreContent = styled.div``;

