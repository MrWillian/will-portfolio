import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CustomText from '../../components/CustomText';
import Lottie from 'react-lottie';
import animationData from '../../lotties/rocket-animation.json';
import { useTranslation } from 'react-i18next';
import * as C from './styles';

import ProfilePic from '../../assets/images/profile-pic.png';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Introduction: React.FC = () => {
  const { t } = useTranslation();

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

      <C.ProfilePicContainer>
        <C.ProfilePicImage src={ProfilePic} />
      </C.ProfilePicContainer>

      <C.OfficeContainer>
        <C.OfficeContainerHeader>
          <C.Line />
          <CustomText
            text={t('menu.introduction')}
            color="#666874" />
        </C.OfficeContainerHeader>
        <C.OfficeContainerContent>
          <CustomText 
            text={t('general.role')}
            weight={900}
            color="#FFC25C"
            size={2} />
          <Lottie options={defaultOptions} height={200} width={200} />
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
