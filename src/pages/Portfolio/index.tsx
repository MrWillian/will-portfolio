import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from '../../components/Card';
import Project from '../../components/Project';
import CustomText from '../../components/CustomText';
import CustomLink from '../../components/CustomLink';

import { 
  Container, CardContainer, ExploreMoreAndProjectsContainer, ExploreMoreHeader,
  ExploreMoreContent, ExploreMore, Line, ProjectsContent
} from './styles';

const Portfolio: React.FC = () => {
  return (
    <Container id="portfolio">
      <CardContainer>
        <Card 
          title="Mobile Developer"
          value="4 projetos"
        />

        <Card 
          title="Web Developer"
          value="10 projetos"
          hasContrast
        />

        <Card 
          title="Full Stack Developer"
          value="2 projetos"
        />
      </CardContainer>

      <ExploreMoreAndProjectsContainer>

        <ExploreMore>
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

            <Link to="/projects">
              <CustomLink>
                Explorar mais projetos
                <ArrowForwardIcon />
              </CustomLink>
            </Link>

          </ExploreMoreContent>
        </ExploreMore>

        {/* <ProjectsContent>
          <Project />
          <Project />
          <Project />
        </ProjectsContent> */}

      </ExploreMoreAndProjectsContainer>


    </Container>
  );
}

export default Portfolio;
