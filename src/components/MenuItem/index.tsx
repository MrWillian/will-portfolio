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
    <Container className={isActive ? 'active' : ''}>
      <CustomText text={title} weight={600} />
    </Container>
  );
}

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;