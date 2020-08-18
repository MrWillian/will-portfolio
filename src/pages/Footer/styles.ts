import styled from 'styled-components';

export const Container = styled.div`
  grid-area: footer;
  padding: 5rem 2rem;
  background-color: var(--base-dark);
`;

export const ContactTypesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

  }

`;

export const CustomLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  color: var(--accent-color);
  text-decoration: underline;
  font-size: 1rem;
  cursor: pointer;

  margin-top: 2rem;
`;

export const EmailContactContainer = styled.div``;

export const DirectContactContainer = styled.div`
  margin-top: 5rem;
`;

export const DirectForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
`;

export const InputGroup = styled.div`
  padding: 1rem;
  
  &.file-input {
    display: flex;
    justify-content: space-between;
  }

`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--grey1);

  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder {
    font-size: 1rem;
    color: var(--white);
    margin-bottom: 1rem;
  }

  &.file::-webkit-file-upload-button {
    visibility: hidden;
  }
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

  > span {

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
