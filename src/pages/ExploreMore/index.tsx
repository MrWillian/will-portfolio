import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import CustomText from '../../components/CustomText';
import ProjectViewer from '../../components/ProjectViewer';

import projectsJson from '../../assets/data/projects.json';

import { 
  Container, ExploreMoreHeader, TitleContainer, Line, ProjectsContainer, Projects, Categories, Category
} from './styles';

// interface Projects {
//   projects: [
//     {
//       title: string,
//       description: string,
//       link: string,
//       image: string  
//     }
//   ]
// }

const ExploreMore: React.FC = () => {
  // const items = useState<Projects[]>(projectsJson);

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
          {/* <Category>Web</Category>
          <Category>Mobile</Category> */}
        </Categories>
        
        <Projects>

          {projectsJson.projects.map((project, index) => (
            <ProjectViewer
              title={project.title}
              link={project.link}
              src={project.image} 
              key={index} />
          ))}
          
        </Projects>
      </ProjectsContainer>

    </Container>
  );
}

export default ExploreMore;
