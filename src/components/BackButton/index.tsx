import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Container, Text } from './styles';

const BackButton: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  return (
    <Container onClick={handleGoBack}>
      <ArrowBackIcon />
      <Text>Voltar</Text>
    </Container>
  );
}

export default BackButton;
