import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from '../../components/Card';
import Project from '../../components/Project';
import CustomText from '../../components/CustomText';
import CustomLink from '../../components/CustomLink';
import { CategoryEnum } from '../../@types/CategoryEnum';
import { useTranslation } from 'react-i18next';

import projectsJson from '../../assets/data/projects.json';

import { 
  Container, CardContainer, ExploreMoreAndProjectsContainer, ExploreMoreHeader,
  ExploreMoreContent, ExploreMore, Line, ProjectsContent
} from './styles';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const getCountOfCategory = (category: CategoryEnum): number => {
    return projectsJson.projects?.filter((value) => isSameCategory(value.category, category)).length;
  }

  const isSameCategory = (projectCategory: string, selectedCategory: CategoryEnum) => selectedCategory === projectCategory;

  return (
    <Container id="portfolio">
      <CardContainer>
        <Card title={t('portfolio.role_mobile')} value={getCountOfCategory(CategoryEnum.MOBILE) + " " + t('portfolio.projects')} />
        <Card title={t('portfolio.role_frontend')} value={getCountOfCategory(CategoryEnum.WEB) + " " + t('portfolio.projects')} hasContrast />
        <Card title={t('portfolio.role_backend')} value={getCountOfCategory(CategoryEnum.TODOS) + " " + t('portfolio.projects')} />
      </CardContainer>

      <ExploreMoreAndProjectsContainer>
        <ExploreMore>
          <ExploreMoreHeader>
            <Line />

            <CustomText
              text={t('portfolio.title')}
              color="#666874" />
          </ExploreMoreHeader>
          
          <ExploreMoreContent>
            <CustomText 
              text={t('portfolio.jobs_title')}
              weight={900}
              size={2} />

            <CustomText 
              text={t('portfolio.jobs_subtitle')}
              weight={600} />

            <Link to="/projects">
              <CustomLink>
              {t('portfolio.explore_more')}
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
