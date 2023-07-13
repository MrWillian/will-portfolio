import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrasilFlag, EuaFlag } from '../../assets/images/flags/';
import Flag from './Flag';
import { Container } from './styles';

const I18n = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (language: string) => i18n.changeLanguage(language);

    const selectedLanguage = i18n.language;

    return (
        <Container>
          <Flag
            image={BrasilFlag}
            isSelected={selectedLanguage === 'pt-BR'}
            onClick={() => handleChangeLanguage('pt-BR')}
          />
          <Flag
            image={EuaFlag}
            isSelected={selectedLanguage === 'en-US'}
            onClick={() => handleChangeLanguage('en-US')}
          />
        </Container>
    )
}

export default I18n;
