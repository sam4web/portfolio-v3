import { ThemeToggler, Sidenav, LogoText } from '@/components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useStore from '@/store';

const BodyOverlay = () => {
  const showSidenav = useStore((state) => state.showSidenav);
  const closeSidenav = useStore((state) => state.closeSidenav);

  return (
    <div
      className={`${
        showSidenav ? 'opacity-80 block' : 'hidden'
      } w-full h-screen md:hidden fixed top-0 left-0 bg-slate-800 z-20`}
      onClick={closeSidenav}
    ></div>
  );
};

const ToggleBar = () => {
  const showSidenav = useStore((state) => state.showSidenav);
  const toggleSidenav = useStore((state) => state.toggleSidenav);

  return (
    <button className='md:hidden block outline-none' onClick={toggleSidenav}>
      <div
        className={`toggle-bar ${showSidenav ? 'toggle-bar-active' : ''}`}
      ></div>
    </button>
  );
};

const Header = () => {
  const closeSidenav = useStore((state) => state.closeSidenav);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      closeSidenav();
      setScrollActive(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [closeSidenav]);

  return (
    <header className='fixed top-0 left-0 w-full z-10'>
      <Sidenav />
      <BodyOverlay />

      <div className='header-glossy-bg shadow-sm'>
        <div
          className={`${
            scrollActive ? 'py-3' : 'lg:py-5'
          } flex-between py-3  px-4 lg:px-7 wrapper`}
        >
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
  );
};

export default Header;
