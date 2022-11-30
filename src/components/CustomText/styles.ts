import styled from 'styled-components';

interface TextProps {
  weight?: number;
  size?: number;
  isWhiteText?: boolean;
}

export const Text = styled.h1<TextProps>`
  color: ${props => props.isWhiteText ? '#FFF' : '#666874'};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}rem;
`;
