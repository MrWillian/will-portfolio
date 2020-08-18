import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import { 
  Container, InputGroup, Input
} from './styles';

const DirectForm: React.FC = () => {
  return (
    <Container>
          
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
    
    </Container>
  );
}

export default DirectForm;
