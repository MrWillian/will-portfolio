import styled from 'styled-components';

export const Container = styled.div`
  grid-area: introduction;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  @media(min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    
    padding: 2rem;
  }
`;

export const PerfilContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-right: 1rem;

  @media(min-width: 500px) {
    flex-direction: column;
  }
`;

export const PerfilName = styled.div`
  display: flex;
  flex-direction: column;


  @media(min-width: 500px) {
    flex-direction: column;
  }
`;

export const Divisor = styled.hr`
  border: 4px solid var(--accent-color);
  width: 2rem;
  margin-left: 2px;

  @media(min-width: 900px) {
    margin-left: 5px;
  }
`;

export const PerfilSocialMedia = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 500px) {
    flex-direction: row;
    margin-top: 1rem;
  }
`;

export const OfficeContainer = styled.div`
  margin: 6rem 1rem; 
`;

export const OfficeContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  min-width: 1rem;
  margin-right: 5px;
`;

export const OfficeContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  align-self: flex-end;
  color: var(--accent-color);
  text-decoration: underline;
  font-size: 1rem;

  margin-top: 2rem;
`;