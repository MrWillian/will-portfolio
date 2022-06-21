import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from '../../components/Card';
import Project from '../../components/Project';
import CustomText from '../../components/CustomText';
import CustomLink from '../../components/CustomLink';
import { CategoryEnum } from '../../@types/CategoryEnum';

import projectsJson from '../../assets/data/projects.json';

import { 
  Container, CardContainer, ExploreMoreAndProjectsContainer, ExploreMoreHeader,
  ExploreMoreContent, ExploreMore, Line, ProjectsContent
} from './styles';

const Portfolio: React.FC = () => {
  const getCountOfCategory = (category: CategoryEnum): number => {
    return projectsJson.projects?.filter((value) => isSameCategory(value.category, category)).length;
  }

  const isSameCategory = (projectCategory: string, selectedCategory: CategoryEnum) => selectedCategory === projectCategory;

  return (
    <Container id="portfolio">
      <CardContainer>
        <Card title="Mobile Developer" value={getCountOfCategory(CategoryEnum.MOBILE) + " projetos"} />
        <Card title="Front-End Developer" value={getCountOfCategory(CategoryEnum.WEB) + " projetos"} hasContrast />
        <Card title="Back-End Developer" value={getCountOfCategory(CategoryEnum.BACKEND) + " projetos"} />
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
