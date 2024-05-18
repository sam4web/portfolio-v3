import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title }) => {
  const location = useLocation();
  const defTitle = 'Sijal Manandhar';

  useEffect(() => {
    document.title = title.trim() ? `${title} | ${defTitle}` : defTitle;
  }, [location, title]);

  return null;
};

export default PageTitle;
