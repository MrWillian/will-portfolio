import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem;
  background-color: var(--base-dark);
`;


export const EmailContactContainer = styled.div``;

export const EmailContactHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  width: 5vw;
  margin-right: 5px;
`;

export const EmailContactContent = styled.div``;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  color: var(--accent-color);
  text-decoration: underline;
  font-size: 18px;

  margin-top: 2rem;
`;

export const PhraseContainer = styled.div`
  margin-top: 4rem;
`;
