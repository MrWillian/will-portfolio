import React from 'react';

import { Container } from './styles';
import CustomText from '../CustomText';

interface Props {
  title: string;
  value: string;
  hasContrast?: boolean;
}

const Card: React.FC<Props> = ({
  title, value, hasContrast
}) => {
  return (
    <Container className={hasContrast ? 'contrast' : ''}>
      <CustomText 
        text={title}
        weight={600}
        size={1} />

      <CustomText 
        text={value}
        size={0.8} />
    </Container>
  );
}

export default Card;
