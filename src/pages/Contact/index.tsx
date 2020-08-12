import React from 'react';
import CustomText from '../../components/CustomText';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { 
  Container, EmailContactContainer, EmailContactHeader, Line,
  EmailContactContent, CustomLink, PhraseContainer
} from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <EmailContactContainer>

        <EmailContactHeader>

          <Line />

          <CustomText
            text="Contato"
            isWhiteText={false} />

        </EmailContactHeader>
        
        <EmailContactContent>
          <CustomText 
            text="Qualquer tipo de pergunta ou discussão."
            weight={900}
            size={36} />

          <CustomText 
            text="Seja sobre orçamento, tecnologias usadas ou dúvidas à cerca da carreira de desenvolvedor, me mande um email..."
            weight={600}
            size={14} />

          <CustomLink>
            williansoares.dev@gmail.com
            <ArrowForwardIcon />
          </CustomLink>

        </EmailContactContent>
      </EmailContactContainer>

      <PhraseContainer>

        <CustomText 
          text="Ninguém é tão grande que não possa aprender, nem tão pequeno que não possa ensinar."
          weight={900}
          size={28} />

        <CustomText 
          text="Quando se procura um profissional na internet temos que ver seu portfólio. Do contrário é como contratar de olhos fechados."
          weight={600}
          size={14} />

      </PhraseContainer>
      
    </Container>
  );
}

export default Contact;
