import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomText from '../../components/CustomText';
import CustomLink from '../../components/CustomLink';
import { useTranslation } from 'react-i18next';

import { 
  Container, EmailContactContainer, EmailContactHeader, Line,
  EmailContactContent, PhraseContainer
} from './styles';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="contact">
      <EmailContactContainer>

        <EmailContactHeader>

          <Line />

          <CustomText
            text={t('contact.label')}
            color="#666874" />

        </EmailContactHeader>
        
        <EmailContactContent>
          <CustomText 
            text={t('contact.title')}
            weight={900}
            size={2} />

          <CustomText 
            text={t('contact.subtitle')}
            weight={600} />

          <CustomLink 
            target="_blank" rel="noopener noreferrer" 
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=williansoares.dev@gmail.com">
            williansoares.dev@gmail.com
            <ArrowForwardIcon />
          </CustomLink>

        </EmailContactContent>
      </EmailContactContainer>

      <PhraseContainer>

        <CustomText 
          text={t('contact.quote')}
          weight={900}
          size={2} />

        <CustomText 
          text={t('contact.subquote')}
          weight={600} />

      </PhraseContainer>
      
    </Container>
  );
}

export default Contact;
