import React from 'react';

import { Text } from './styles';

interface Props {
  text: string;
  color?: string;
  weight?: number;
  size?: number;
}

const CustomText: React.FC<Props> = ({
  text, color, weight, size
}) => {
  return (
    <Text 
      color={color}
      weight={weight}
      size={size}
    >
      {text}
    </Text>
  );
}

CustomText.defaultProps = {
  color: '#FFF',
  weight: 400,
  size: 1,
};

export default CustomText;