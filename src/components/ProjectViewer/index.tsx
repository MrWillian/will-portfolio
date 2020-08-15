import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import CustomText from '../CustomText';

import { 
  Container, Viewer, InfoContainer, CustomLink
} from './styles';

interface Props {
  title: string;
  link?: string;
}

const ProjectViewer: React.FC<Props> = ({
  title, link
}) => {
  return (
    <Container>
      <Viewer />

      <InfoContainer>

        <CustomText
          text={title}
          weight={600}
          size={0.8} />

        <CustomLink>
          Visualizar
          <LaunchIcon />
        </CustomLink>

      </InfoContainer>

    </Container>
  );
}

export default ProjectViewer;
