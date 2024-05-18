import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext({});

const HeaderContextProvider = ({ children }) => {
  const [showSidenav, setShowSidenav] = useState(false);

  const toggleSidenav = () => {
    setShowSidenav((prev) => !prev);
  };

  const closeSidenav = () => {
    setShowSidenav(false);
  };

  return (
    <HeaderContext.Provider
      value={{ showSidenav, toggleSidenav, closeSidenav }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export default HeaderContextProvider;
