import styled from 'styled-components';

export const Container = styled.div`
  grid-area: footer;
  padding: 5rem 2rem;
  background-color: var(--base-dark);
`;

export const ContactTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
  }
`;

export const EmailContactContainer = styled.div``;

export const DirectContactContainer = styled.div`
  margin-top: 5rem;
`;

export const FooterEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10rem;

  color: var(--white);
  font-size: 1.2rem;
  font-weight: 400;

  > strong {
    font-weight: 900;
  }
`;

export const Logo = styled.div``;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;

  > a {
    margin: 0.5rem;
  }
`;

export const TextContainer = styled.div``;
