import styled from 'styled-components';

export const Container = styled.div`
  grid-area: contact;
  padding: 4rem 2rem 18rem 2rem;
  background-color: var(--base-dark);

  @media(min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmailContactContainer = styled.div``;

export const EmailContactHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  width: 1rem;
  margin-right: 5px;
`;

export const EmailContactContent = styled.div`
  
  @media(min-width: 1000px) {
    max-width: 30rem;
  }
`;

export const PhraseContainer = styled.div`
  margin-top: 6rem;

  @media(min-width: 1000px) {
    margin-top: 0;
    max-width: 30rem;
  }
`;
