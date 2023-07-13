import styled from 'styled-components';

type ImageProps = {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img<ImageProps>`
  width: ${p => p.isSelected ? '30px' : '15px'};
  margin: 1px;
`;
