import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
  const location = useLocation();
  const appTitle = 'Sijal Manandhar';

  useEffect(() => {
    document.title = title.trim() ? `${title} | ${appTitle}` : appTitle;
  }, [appTitle, location, title]);
};

export default usePageTitle;
