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
  
  margin: 50px 30px;
`;

export const PerfilName = styled.div``;

export const Divisor = styled.hr`
  border: 4px solid var(--accent-color);
  width: 10vw;
  margin-left: 2px;
`;

export const PerfilSocialMedia = styled.div`
  display: flex;
`;

export const OfficeContainer = styled.div`
  margin: 80px 30px;
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


  &:last-child {
    align-self: flex-end;
    color: var(--accent-color);
  }
`;

