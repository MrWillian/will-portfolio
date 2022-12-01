import React, { useState } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import Info from '@material-ui/icons/Info';
import CustomText from '../CustomText';
import CloseIcon from '@material-ui/icons/Close';

import { Container, Viewer, InfoContainer, CustomLink, LinksContainer, InfoText, LabelText } from './styles';
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
    backgroundColor: '#252734'
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
        <CustomText text={title} weight={600} size={0.8} />
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
        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
          <button 
            style={{height: 25, border: '0px', cursor: 'pointer'}}
            onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <p>
          <InfoText>Tecnologia Utilizada:</InfoText>
          <LabelText>{info?.technology}</LabelText>
        </p>
        <p>
          <InfoText>Descrição:</InfoText> 
          <LabelText>{info?.description}</LabelText>
        </p>
        {info?.linkGithub 
          ? <p>
              <InfoText>Link do Repositório:</InfoText>
              <LabelText><a href={info?.linkGithub}>{info?.linkGithub}</a></LabelText>
            </p>
          : <p></p>
        }
        {link 
          ? <p>
              <InfoText>Link:</InfoText>
              <LabelText><a target="_blank" rel="noopener noreferrer" href={link}>{link}</a></LabelText>
            </p>
          : <p></p>
        }
      </Modal>
    </Container>
  );
}

export default ProjectViewer;
