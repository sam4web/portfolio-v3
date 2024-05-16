import { NAV_LINKS } from '@/constants';
import { LogoText, ThemeToggler } from '@/components';

const Sidenav = ({ active }) => {
  return (
    <nav
      className={`md:hidden block fixed top-0 left-0 h-screen z-10 ${
        !active && '-translate-x-full'
      }`}
    >
      <div className='h-full shadow-sm bg-light dark:bg-dark dark:shadow-transparent px-3 sm:px-5 py-5 '>
        <div className='h-full flex flex-col justify-between'>
          <div className='space-y-7'>
            <LogoText />

            <ul className='flex flex-col space-y-2'>
              {NAV_LINKS.map((link, idx) => (
                <li key={idx} className='capitalize text-base text-responsive'>
                  <a href={link.ref}>{link.title}</a>
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
