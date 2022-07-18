import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import CustomText from '../CustomText';

import { 
  Container, Viewer, InfoContainer, CustomLink, LinksContainer
} from './styles';

interface ProjectProps {
  title: string;
  src: string;
  link: string;
}

const ProjectViewer: React.FC<ProjectProps> = ({
  title, link, src
}) => {
  return (
    <Container>
      <Viewer image={src} />

      <InfoContainer>

        <CustomText
          text={title}
          weight={600}
          size={0.8} />

        <LinksContainer>
          <CustomLink target="_blank" rel="noopener noreferrer" href={link}>
            Visualizar
            <LaunchIcon />
          </CustomLink>
          <CustomLink target="_blank" rel="noopener noreferrer" href={link}>
            Informações
            <LaunchIcon />
          </CustomLink>
        </LinksContainer>

      </InfoContainer>

    </Container>
  );
}

export default ProjectViewer;
