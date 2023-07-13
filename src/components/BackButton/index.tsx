import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTranslation } from 'react-i18next';

import { Container, Text } from './styles';

const BackButton: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleGoBack = () => history.goBack();

  return (
    <Container onClick={handleGoBack}>
      <ArrowBackIcon />
      <Text>{t('explore_more.back')}</Text>
    </Container>
  );
}

export default BackButton;
