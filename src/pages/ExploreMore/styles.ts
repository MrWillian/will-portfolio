import styled from 'styled-components';


interface ButtonProps {
  readonly isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  min-height: 100%;
  padding: 2rem;
  background-color: var(--base-dark);
`;

export const ExploreMoreHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
  margin: 3rem 0;
`;

export const Categories = styled.div`
  margin-bottom: 1rem;
`;

export const Category = styled.button<ButtonProps>`
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: var(--grey1);
  background-color: transparent;
  cursor: pointer;

  ${props => props.isActive && `
    color: var(--accent-color);
    background-color: var(--base-color);
  `}
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media(min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
