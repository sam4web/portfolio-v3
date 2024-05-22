import { useEffect, useState } from 'react';
import { createReactIcon } from '@/utils';

const ThemeToggler = ({ includeText }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <button
      className={`theme-toggle-btn ${
        includeText ? 'flex-center space-x-2' : ''
      }`}
      onClick={toggleTheme}
    >
      <div className='text-xl'>
        <span className='dark:hidden block'>{createReactIcon('SunIcon')}</span>
        <span className='dark:block hidden'>{createReactIcon('MoonIcon')}</span>
      </div>

      {includeText ? (
        <h4 className='text-base'>
          <span className='dark:hidden inline-block'>Light</span>
          <span className='dark:inline hidden'>Dark</span> Theme
        </h4>
      ) : (
        ''
      )}
    </button>
  );
};

export default ThemeToggler;
