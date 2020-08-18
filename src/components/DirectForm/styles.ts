import styled from 'styled-components';

export const Container = styled.div`
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
  height: 2rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--grey1);
  color: var(--white);

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
