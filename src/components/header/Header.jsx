import { ThemeToggler, Sidenav, LogoText } from '@/components';
import { HeaderContextProvider, useHeaderContext } from '@/context';
import { Link } from 'react-router-dom';

const BodyOverlay = () => {
  const { showSidenav, closeSidenav } = useHeaderContext();
  return (
    <div
      className={`${
        showSidenav ? 'opacity-80 block' : 'hidden'
      } w-full h-screen md:hidden fixed top-0 left-0 bg-slate-800 z-5`}
      onClick={closeSidenav}
    ></div>
  );
};

const ToggleBar = () => {
  const { showSidenav, toggleSidenav } = useHeaderContext();
  return (
    <button className='md:hidden block outline-none' onClick={toggleSidenav}>
      <div
        className={`toggle-bar ${showSidenav ? 'toggle-bar-active' : ''}`}
      ></div>
    </button>
  );
};

const Header = () => {
  return (
    <HeaderContextProvider>
      <header>
        <Sidenav />
        <BodyOverlay />

        <div className='bg-light dark:bg-dark shadow-sm'>
          <div className='flex-between py-4 lg:py-6 px-4 lg:px-7 wrapper'>
            <LogoText />

            <ul className='md:flex-center space-x-4 hidden'>
              <li className='nav-link-text text-lg hover:underline'>
                <Link to='/archive'>archive</Link>
              </li>
              <li className='nav-link-text text-lg hover:underline'>
                <a href='/resume.pdf' target='_blank'>
                  resume
                </a>
              </li>

              <ThemeToggler />
            </ul>

            <ToggleBar />
          </div>
        </div>
      </header>
    </HeaderContextProvider>
  );
};

export default Header;
