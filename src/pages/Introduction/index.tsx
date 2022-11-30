import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import CustomText from '../../components/CustomText';

import * as C from './styles';

const Introduction: React.FC = () => {
  return (
    <C.Container id="introduction">
      
      <C.PerfilContainer>

        <C.PerfilName>
          <CustomText 
            text="Willian Marciel." 
            weight={900}
            size={2.5}
          />
          <C.Divisor />
        </C.PerfilName>
        
        <C.PerfilSocialMedia>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.instagram.com/willian.dev/">
            <InstagramIcon 
              fontSize="large" 
              htmlColor="#FFF" />
          </a>

          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/willian-marciel/">
            <LinkedInIcon 
              fontSize="large" 
              htmlColor="#FFF" />
          </a>
        </C.PerfilSocialMedia>

      </C.PerfilContainer>

      <C.OfficeContainer>
        <C.OfficeContainerHeader>

          <C.Line />

          <CustomText
            text="Introdução"
            isWhiteText={false} />

        </C.OfficeContainerHeader>
        <C.OfficeContainerContent>
          <CustomText 
            text="Desenvolvedor Web e Mobile"
            weight={900}
            size={2} />

          {/* <CustomLink>
            Minha história
            <ArrowForwardIcon />
          </CustomLink> */}

        </C.OfficeContainerContent>
      </C.OfficeContainer>

    </C.Container>
  );
}

export default Introduction;
