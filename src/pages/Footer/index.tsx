import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CustomText from '../../components/CustomText';
import CustomLink from '../../components/CustomLink';
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/images/logo.png';

import { 
  Container, EmailContactContainer, FooterEndContainer, SocialMedia, TextContainer, ContactTypesContainer
} from './styles';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>

      <ContactTypesContainer>

        <EmailContactContainer>

          <CustomText 
            text={t('footer.title')}
            weight={900}
            size={2} />

          <CustomText 
            text={t('footer.subtitle1')}
            weight={900}
            size={2} />

          <CustomText 
            text={t('footer.subtitle2')} />

          <CustomLink
            target="_blank" rel="noopener noreferrer" 
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=williansoares.dev@gmail.com">
            williansoares.dev@gmail.com
            <ArrowForwardIcon />
          </CustomLink>

        </EmailContactContainer>

        {/* <DirectContactContainer>
          <CustomText  
            text="Quer o orçamento do seu projeto mais rapidamente?"
            weight={900}
            size={1.5} />

          <CustomText  
            text="Me contate por aqui."
            weight={900}
            size={1.5} />

          <DirectForm />
          
        </DirectContactContainer> */}
      
      </ContactTypesContainer>

      <FooterEndContainer>
        
        <img src={Logo} alt="logo" />
        
        <TextContainer>
          <strong>{t('footer.thanks')}</strong> 
          <span>{t('footer.goodbye')}</span>
        </TextContainer>

        <SocialMedia>
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
        </SocialMedia>

      </FooterEndContainer>

    </Container>
  );
}

export default Footer;
