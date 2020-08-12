import React from 'react';
import Card from '../../components/Card';

import { Container, CardContainer } from './styles';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <CardContainer>
        <Card 
          title="Mobile Developer"
          value="124 projetos"
        />

        <Card 
          title="Web Developer"
          value="37 projetos"
          hasContrast
        />

        <Card 
          title="Full Stack Developer"
          value="62 projetos"
        />
      </CardContainer>
    </Container>
  );
}

export default Portfolio;
