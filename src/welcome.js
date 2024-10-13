import React, { useContext } from 'react';
import { Languagecontext } from './Languagecontext';

const WelcomeMessage = () => {
  const { language } = useContext(Languagecontext);

  const messages = {
    en: 'Welcome to the Language Translator App!',
    es: '¡Bienvenido a la aplicación de traducción de idiomas!',
    fr: 'Bienvenue dans l\'application de traduction de langues!',
  };

  return <h2 className="text-xl font-semibold">{messages[language]}</h2>;
};

export default WelcomeMessage;
