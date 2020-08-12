import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CustomText from '../../components/CustomText';

import { 
  Container, EmailContactContainer, CustomLink, DirectContactContainer,
  DirectForm, InputGroup, Input, FooterEndContainer, Logo, SocialMedia, TextContainer
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>

      <EmailContactContainer>

        <CustomText 
          text="Tem um projeto?"
          weight={900}
          size={2} />

        <CustomText 
          text="Vamos conversar."
          weight={900}
          size={2} />

        <CustomText 
          text="Me conte sobre sua ideia, podemos desenvolvê-lá juntos." />

        <CustomLink>
          williansoares.dev@gmail.com
          <ArrowForwardIcon />
        </CustomLink>

      </EmailContactContainer>

      <DirectContactContainer>
        <CustomText  
          text="Quer o orçamento do seu projeto mais rapidamente?"
          weight={900}
          size={1.5} />

        <CustomText  
          text="Me contate por aqui."
          weight={900}
          size={1.5} />

        <DirectForm>
        
          <InputGroup>
            <Input type="text" placeholder="Qual o seu nome?" />    
          </InputGroup>

          <InputGroup>
            <Input type="text" placeholder="Qual o seu email?" />
          </InputGroup>
          
          <InputGroup className="file-input">
            <Input placeholder="Conte-me sobre o seu projeto" />
            
            {/* <Input
              className="file"
              type="file"> */}
              <AttachFileIcon htmlColor="#FFC25C" />
            {/* </Input> */}

            <ArrowForwardIcon 
              htmlColor="#FFC25C" />

          </InputGroup>
        
        </DirectForm>
      </DirectContactContainer>

      <FooterEndContainer>
        <Logo />
        
        <TextContainer>
          <strong>Obrigado, </strong> 
          <span>isso é tudo pessoal.</span>
        </TextContainer>

        <SocialMedia>
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
        </SocialMedia>

      </FooterEndContainer>

    </Container>
  );
}

export default Footer;
