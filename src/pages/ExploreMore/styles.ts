import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  background-color: var(--base-dark);
`;

export const ExploreMoreHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  width: 1rem;
  margin-right: 5px;
`;

export const ProjectsContainer = styled.div`
  margin: 2rem 0;
`;

export const Categories = styled.div`
  margin-bottom: 1rem;
`;

export const Category = styled.a`
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: var(--grey1);
  background-color: transparent;

  &:first-child {
    color: var(--accent-color);
    background-color: var(--base-color);
  }
`;
