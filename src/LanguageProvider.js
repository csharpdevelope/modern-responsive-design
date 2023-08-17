import { createContext, useState } from "react";
export const AppContext = createContext();

const LanguageProvider = ({ children }) => {

  const language = localStorage.getItem('lang');

  if (language === undefined || language === null) {
    localStorage.setItem('lang', 'en');
  }
  const [lang, setLang] = useState(language);
  const [loading, setLoading] = useState(false);
  
  return (
    <AppContext.Provider value={{ lang, setLang, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
}


export default LanguageProvider;