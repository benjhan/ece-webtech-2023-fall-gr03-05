import { createContext, useState, useContext } from 'react';
const DarkModeContext = createContext();
export function useDarkMode() {
  return useContext(DarkModeContext);
}
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
