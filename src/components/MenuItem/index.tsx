import React from 'react';
import CustomText from '../CustomText';

import { Container } from './styles';

interface Props {
  title: string;
  isActive?: boolean;
}

const MenuItem: React.FC<Props> = ({ 
  title, isActive 
}) => {
  return (
    <Container>
      <CustomText 
        text={title} 
        weight={600} 
        isWhiteText={isActive} />
    </Container>
  );
}

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;