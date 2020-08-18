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

  @media(min-width: 600px) {
    flex-direction: row;
    top: -8rem;
  }
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  width: 1rem;
  margin-right: 5px;
`;

export const ExploreMoreAndProjectsContainer = styled.div`
  margin-top: 7rem;

  @media(min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rem;
  }
`;

export const ExploreMore = styled.div`
  @media(min-width: 800px) {
    max-width: 25rem;
  }
`;

export const ExploreMoreHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ExploreMoreContent = styled.div``;

export const ProjectsContent = styled.div``;
