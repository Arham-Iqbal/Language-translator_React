
# Language Translator App

A simple language translator application built using **React** and the **Context API**. This app allows users to switch between multiple languages (English, Spanish, French), and dynamically updates the displayed content based on the selected language.

## Features

- Switch between different languages (English, Spanish, French).
- Display a welcome message that dynamically changes based on the selected language.
- Utilizes **Context API** to manage global state (selected language) throughout the app.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Context API**: For managing global state (language).
- **Tailwind CSS**: For styling the components and layout.

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/language-translator-app.git
   cd language-translator-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## File Structure

- **`src/`**: Contains all source files.
  - **`App.js`**: The main application component.
  - **`Languagecontext.js`**: Manages the `LanguageProvider` and holds the logic for changing languages.
  - **`WelcomeMessage.js`**: Displays the welcome message that changes according to the selected language.
  - **`LanguageSelector.js`**: Allows the user to select between different languages.
  - **`App.css`**: Styling file using **Tailwind CSS**.

## How It Works

- The app uses **Context API** to globally manage the selected language.
- `LanguageProvider` is used to wrap the entire app, and it holds the language state (`en`, `es`, `fr`).
- The `WelcomeMessage` component consumes the language from context and displays a message based on the current language.
- The `LanguageSelector` component allows users to switch between different languages, which updates the global language state.

## Components

### `LanguageContext.js`

```javascript
import React, { createContext, useState } from 'react';

export const Languagecontext = createContext();

export const Languageprovider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Languagecontext.Provider value={{ language, changeLanguage }}>
      {children}
    </Languagecontext.Provider>
  );
};
```

### `App.js`

```javascript
import React from 'react';
import { Languageprovider } from './Languagecontext';
import LanguageSelector from './LanguageSelector';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <Languageprovider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Language Translator</h1>
        <WelcomeMessage />
        <LanguageSelector />
      </div>
    </Languageprovider>
  );
}

export default App;
```

### `WelcomeMessage.js`

```javascript
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
```

### `LanguageSelector.js`

```javascript
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
```

## How to Use

- Clone the repository, install dependencies, and start the server.
- Use the language selector buttons to toggle between different languages.
- The welcome message will update based on the selected language.

## License

This project is licensed under the MIT License.

---
