import "./App.css";
import LanguageSelector from "./Languageselector";
import WelcomeMessage from "./welcome";
import { Languageprovider } from "./Languagecontext";

function App() {
  return(
    <div>
  <Languageprovider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Language Translator</h1>
        <WelcomeMessage />
        <LanguageSelector />
      </div>
    </Languageprovider>
    </div>
  );
}

export default App;
