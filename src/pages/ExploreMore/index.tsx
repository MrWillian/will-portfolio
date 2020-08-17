import React from 'react';
import BackButton from '../../components/BackButton';
import CustomText from '../../components/CustomText';
import ProjectViewer from '../../components/ProjectViewer';

import { 
  Container, ExploreMoreHeader, TitleContainer, Line,
  ProjectsContainer, Projects, Categories, Category
} from './styles';

const ExploreMore: React.FC = () => {
  return (
    <Container>
      <BackButton />

      <ExploreMoreHeader>
        <TitleContainer>

          <Line />

          <CustomText
            text="Projetos"
            isWhiteText={false} 
            size={1.5} />
          
        </TitleContainer>

        <CustomText 
          text="Alguns dos meus projetos já desenvolvidos:"
          weight={600}
          size={0.8} />
      </ExploreMoreHeader>

      <ProjectsContainer>
        <Categories>
          <Category>Todos</Category>
          <Category>Web</Category>
          <Category>Mobile</Category>
        </Categories>
        
        <Projects>
          <ProjectViewer title="Landing Page 1" />
          <ProjectViewer title="Site 1" />
          <ProjectViewer title="Site 2" />
          <ProjectViewer title="App 1" />
          <ProjectViewer title="Landing Page 2" />
          <ProjectViewer title="App 2" />
          <ProjectViewer title="App 3" />
        </Projects>
      </ProjectsContainer>

    </Container>
  );
}

export default ExploreMore;
