import React, { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import CustomText from '../../components/CustomText';
import ProjectViewer from '../../components/ProjectViewer';
import { useTranslation } from 'react-i18next';

import projectsJson from '../../assets/data/projects.json';

import { 
  Container, ExploreMoreHeader, TitleContainer, Line, ProjectsContainer, Projects, Categories, Category
} from './styles';

enum CategoryEnum {
  TODOS = 'Todos',
  WEB = 'Web',
  MOBILE = 'Mobile',
}

interface ProjectsProps {
  projects?: Project[] 
}

export interface Project {
  title: string,
  description: string,
  link: string,
  image: string,
  category: CategoryEnum,
  info?: {
    technology: string,
    linkGithub: string
  },
}

const ExploreMore: React.FC = () => {
  const [category, setCategory] = useState(CategoryEnum.TODOS);
  const [projectsData, setProjectsData] = useState<ProjectsProps>({});
  const { t } = useTranslation();

  useEffect(() => {
    setProjectsData(projectsJson as ProjectsProps);
  }, []);

  useEffect(() => {
    if (projectsJson.projects !== undefined) {
      const projects = projectsJson.projects?.filter((value) => isSameCategory(value.category)) as Project[];
      setProjectsData({projects} as ProjectsProps);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const isSameCategory = (projectCategory: string) => category === CategoryEnum.TODOS ? true : projectCategory === category;

  const changeCategory = (selectedCategory: CategoryEnum) => setCategory(selectedCategory);

  return (
    <Container>
      <BackButton />
      <ExploreMoreHeader>
        <TitleContainer>
          <Line />
          <CustomText text={t('explore_more.title')} color="#FFC25C" size={1.5} />
        </TitleContainer>
        <CustomText text={t('explore_more.some_projects')} weight={600} size={0.8} />
      </ExploreMoreHeader>

      <ProjectsContainer>
        <Categories>
          <Category onClick={() => changeCategory(CategoryEnum.TODOS)} isActive={category === CategoryEnum.TODOS}>
            {t('explore_more.all')}
          </Category>
          <Category onClick={() => changeCategory(CategoryEnum.WEB)} isActive={category === CategoryEnum.WEB}>
            Web
          </Category>
          <Category onClick={() => changeCategory(CategoryEnum.MOBILE)} isActive={category === CategoryEnum.MOBILE}>
            Mobile
          </Category>
        </Categories>
        
        <Projects>
          {projectsData.projects?.map((project, index) => (
            <ProjectViewer
              title={project.title}
              link={project.link}
              src={project.image} 
              info={project.info}
              key={index} />
          ))}          
        </Projects>
      </ProjectsContainer>

    </Container>
  );
}

export default ExploreMore;
