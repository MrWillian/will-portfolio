import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import CustomText from '../../components/CustomText';

import { 
  Container, PerfilContainer, PerfilName, Divisor, PerfilSocialMedia,
  OfficeContainer, OfficeContainerHeader, Line, OfficeContainerContent, CustomLink
} from './styles';

const Introduction: React.FC = () => {
  return (
    <Container id="introduction">
      
      <PerfilContainer>

        <PerfilName>
          <CustomText 
            text="Willian Marciel." 
            weight={900}
            size={2.5}
          />
          <Divisor />
        </PerfilName>
        
        <PerfilSocialMedia>
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
        </PerfilSocialMedia>

      </PerfilContainer>

      <OfficeContainer>
        <OfficeContainerHeader>

          <Line />

          <CustomText
            text="Introdução"
            isWhiteText={false} />

        </OfficeContainerHeader>
        <OfficeContainerContent>
          <CustomText 
            text="Desenvolvedor Web e Mobile"
            weight={900}
            size={2} />

          {/* <CustomLink>
            Minha história
            <ArrowForwardIcon />
          </CustomLink> */}

        </OfficeContainerContent>
      </OfficeContainer>

    </Container>
  );
}

export default Introduction;
