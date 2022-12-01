import styled from 'styled-components';

interface TextProps {
  weight?: number;
  size?: number;
  color?: string;
}

export const Text = styled.h1<TextProps>`
  color: ${props => props.color ? props.color : '#FFF'};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}rem;
`;
