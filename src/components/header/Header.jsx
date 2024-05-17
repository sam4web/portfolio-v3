import { ThemeToggler, ToggleBar, Sidenav, LogoText } from '@/components';
import { NAV_LINKS } from '@/constants';
import { useState } from 'react';

const BodyOverlay = ({ active, handleClick }) => {
  return (
    <div
      className={`${
        active ? 'opacity-80 block' : 'hidden'
      } w-full h-screen md:hidden fixed top-0 left-0 bg-slate-800 z-5`}
      onClick={handleClick}
    ></div>
  );
};

const Header = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  const toggleSidenav = () => {
    setShowSidenav((prev) => !prev);
  };

  return (
    <header>
      <Sidenav active={showSidenav} />
      <BodyOverlay active={showSidenav} handleClick={toggleSidenav} />

      <div className='bg-light dark:bg-dark shadow-sm'>
        <div className='flex-between py-4 lg:py-6 px-4 lg:px-7 wrapper'>
          <LogoText />

          <ul className='md:flex-center space-x-4 hidden'>
            {NAV_LINKS.map((link, idx) => (
              <li key={idx} className='nav-link-text text-lg hover:underline'>
                <a href={link.ref}>{link.title}</a>
              </li>
            ))}

            <ThemeToggler />
          </ul>

          <ToggleBar active={showSidenav} handleClick={toggleSidenav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
