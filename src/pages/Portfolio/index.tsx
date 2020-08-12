import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from '../../components/Card';
import CustomText from '../../components/CustomText';

import { 
  Container, CardContainer, ExploreMoreContainer, ExploreMoreHeader,
  ExploreMoreContent, Line, CustomLink
} from './styles';
import Project from '../../components/Project';

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

      <ExploreMoreContainer>

        <ExploreMoreHeader>

          <Line />

          <CustomText
            text="Portfólio"
            isWhiteText={false} />

        </ExploreMoreHeader>
        
        <ExploreMoreContent>
          <CustomText 
            text="Trabalhos criativos, projetos selecionados."
            weight={900}
            size={2} />

          <CustomText 
            text="Veja meus projetos já criados..."
            weight={600} />

          <CustomLink>
            Explorar mais projetos
            <ArrowForwardIcon />
          </CustomLink>

        </ExploreMoreContent>
      </ExploreMoreContainer>

      <Project />
      <Project />
      <Project />

    </Container>
  );
}

export default Portfolio;
