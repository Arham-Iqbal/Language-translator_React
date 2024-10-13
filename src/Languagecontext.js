import React, { createContext, useState } from 'react'

export const Languagecontext=createContext();
export const Languageprovider = ({children}) => {
    const [language,setlanguage]=useState("en")
    function changeLanguage(lan)
    {
        setlanguage(lan)
    }
  return (
    <div>
        <Languagecontext.Provider value={{language,changeLanguage}}>
        {children}
        </Languagecontext.Provider>
    </div>
  )
}

