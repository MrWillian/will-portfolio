import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomText from '../../components/CustomText';
import CustomLink from '../../components/CustomLink';

import { 
  Container, EmailContactContainer, EmailContactHeader, Line,
  EmailContactContent, PhraseContainer
} from './styles';

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <EmailContactContainer>

        <EmailContactHeader>

          <Line />

          <CustomText
            text="Contato"
            color="#666874" />

        </EmailContactHeader>
        
        <EmailContactContent>
          <CustomText 
            text="Qualquer tipo de pergunta ou discussão."
            weight={900}
            size={2} />

          <CustomText 
            text="Seja sobre orçamento, tecnologias usadas ou dúvidas à cerca da carreira de desenvolvedor, me mande um email..."
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
          text="Ninguém é tão grande que não possa aprender, nem tão pequeno que não possa ensinar."
          weight={900}
          size={2} />

        <CustomText 
          text="Quando se procura um profissional na internet temos que ver seu portfólio. Do contrário é como contratar de olhos fechados."
          weight={600} />

      </PhraseContainer>
      
    </Container>
  );
}

export default Contact;
