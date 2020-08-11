import React from 'react';

import { Text } from './styles';

interface Props {
  text: string;
  isWhiteText?: boolean;
  weight?: number;
  size?: number;
}

const CustomText: React.FC<Props> = ({
  text, isWhiteText, weight, size
}) => {
  return (
    <Text 
      isWhiteText={isWhiteText}
      weight={weight}
      size={size}
    >
      {text}
    </Text>
  );
}

CustomText.defaultProps = {
  isWhiteText: true,
  weight: 400,
  size: 14,
};

export default CustomText;