import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PerfilContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 2rem 2rem;
`;

export const PerfilName = styled.div``;

export const Divisor = styled.hr`
  border: 4px solid var(--accent-color);
  width: 10vw;
  margin-left: 2px;
`;

export const PerfilSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfficeContainer = styled.div`
  margin: 6rem 2rem;
`;

export const OfficeContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  width: 5vw;
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
  font-size: 18px;

  margin-top: 2rem;
`;