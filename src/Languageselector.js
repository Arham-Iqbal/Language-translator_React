import React, { useContext } from 'react';
import { Languagecontext } from './Languagecontext';

const LanguageSelector = () => {
  const { changeLanguage } = useContext(Languagecontext);

  return (
    <div className="mb-4">
      <button onClick={() => changeLanguage('en')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">
        English
      </button>
      <button onClick={() => changeLanguage('es')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">
        Español
      </button>
      <button onClick={() => changeLanguage('fr')} className="px-4 py-2 mx-2 bg-blue-500 text-white rounded">
        Français
      </button>
    </div>
  );
};

export default LanguageSelector;
