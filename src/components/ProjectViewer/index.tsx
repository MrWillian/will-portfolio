import React, { useState } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import Info from '@material-ui/icons/Info';
import CustomText from '../CustomText';

import { 
  Container, Viewer, InfoContainer, CustomLink, LinksContainer
} from './styles';
import Modal from 'react-modal';

interface ProjectProps {
  title: string;
  src: string;
  link: string;
  info?: ProjectInfo
}

export interface ProjectInfo {
  technology?: string,
  linkGithub?: string,
  description?: string,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 400,
  },
};

Modal.setAppElement('#root');

const ProjectViewer: React.FC<ProjectProps> = ({ title, link, src, info }) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const showModal = () => setIsVisibleModal(true);
  
  const closeModal = () => setIsVisibleModal(false);

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
            <LaunchIcon fontSize="small" />
          </CustomLink>
          <CustomLink onClick={showModal}>
            Informações
            <Info fontSize="small" />
          </CustomLink>
        </LinksContainer>

      </InfoContainer>

      <Modal
        isOpen={isVisibleModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Tecnologia Utilizada: {info?.technology}</p>
        <p>Descricao: {info?.description}</p>
        {info?.linkGithub 
          ? <p>Link do Repositório: <a href={info?.linkGithub}>{info?.linkGithub}</a></p>
          : <p></p>
        }
        {link 
          ? <p>Link: <a target="_blank" rel="noopener noreferrer" href={link}>{link}</a></p>
          : <p></p>
        }
      </Modal>
    </Container>
  );
}

export default ProjectViewer;
