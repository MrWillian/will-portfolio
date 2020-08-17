import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import CustomText from '../CustomText';

import { 
  Container, Viewer, InfoContainer, CustomLink
} from './styles';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  src: string;
  link: string;
}

const ProjectViewer: React.FC<Props> = ({
  title, link, src
}) => {
  return (
    <Container>
      <Viewer>
        <img src={src} alt={title} />
      </Viewer>

      <InfoContainer>

        <CustomText
          text={title}
          weight={600}
          size={0.8} />

        <CustomLink target="_blank" rel="noopener noreferrer" href={link}>
          Visualizar
          <LaunchIcon />
        </CustomLink>

      </InfoContainer>

    </Container>
  );
}

export default ProjectViewer;
