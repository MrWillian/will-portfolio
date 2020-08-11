import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import CustomText from '../../components/CustomText';

import { 
  Container, PerfilContainer, PerfilName, Divisor, PerfilSocialMedia,
  OfficeContainer, OfficeContainerHeader, Line, OfficeContainerContent
} from './styles';

const Introduction: React.FC = () => {
  return (
    <Container>
      
      <PerfilContainer>

        <PerfilName>
          <CustomText 
            text="Willian Marciel." 
            weight={900}
            size={50}
          />
          <Divisor />
        </PerfilName>
        
        <PerfilSocialMedia>
          <a href="#">
            <InstagramIcon 
              fontSize="large" 
              htmlColor="#FFF" />
          </a>

          <a href="#">
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
            size={36} />

          <CustomText 
            text="Minha história ->"
            weight={600}
             />
        </OfficeContainerContent>
      </OfficeContainer>

    </Container>
  );
}

export default Introduction;
