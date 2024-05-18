import { NAV_LINKS } from '@/constants';
import { LogoText, ThemeToggler } from '@/components';
import { Link } from 'react-router-dom';
import { useHeaderContext } from '@/context';

const Sidenav = () => {
  const { showSidenav, closeSidenav } = useHeaderContext();

  return (
    <nav
      className={`md:hidden block fixed top-0 left-0 h-full z-10 ${
        !showSidenav && '-translate-x-full'
      }`}
    >
      <div className='h-full shadow-sm bg-light dark:bg-dark dark:shadow-transparent px-3 sm:px-5 py-5 '>
        <div className='h-full flex flex-col justify-between'>
          <div className='space-y-7'>
            <LogoText />

            <ul className='flex flex-col space-y-2'>
              {NAV_LINKS.map((link, idx) => (
                <li key={idx} onClick={closeSidenav} className='nav-link-text'>
                  <Link to={link.ref}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <ThemeToggler includeText />
        </div>
      </div>
    </nav>
  );
};

export default Sidenav;
