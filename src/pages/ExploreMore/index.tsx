import React from 'react';
import BackButton from '../../components/BackButton';
import CustomText from '../../components/CustomText';
import ProjectViewer from '../../components/ProjectViewer';

import TwitterClone from '../../assets/images/twitter-clone.jpg';
import DiscordClone from '../../assets/images/discord-clone.jpg';
import CovidTracker from '../../assets/images/covid-tracker.jpg';
import TaskManager from '../../assets/images/task-manager.jpg';

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

          <ProjectViewer
            title="Twitter Clone" 
            link="https://willian-twitter-clone.netlify.app"
            src={TwitterClone} />
          
          <ProjectViewer
            title="Discord Clone" 
            link="https://willian-discord-clone.netlify.app"
            src={DiscordClone} />
          
          <ProjectViewer
            title="Covid Tracker" 
            link="https://covid-world-tracker.netlify.app/"
            src={CovidTracker} />
          
          <ProjectViewer
            title="Task Manager" 
            link="https://task-manager-willian.netlify.app/"
            src={TaskManager} />
          
        </Projects>
      </ProjectsContainer>

    </Container>
  );
}

export default ExploreMore;
