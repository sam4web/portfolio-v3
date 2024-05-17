import { FOOTER_LINKS } from '@/constants';
import { createReactIcon } from '@/utils';

const Footer = () => {
  return (
    <footer>
      <div className='bg-dark dark:bg-slate-900'>
        <div className='py-4 lg:py-6 px-4 lg:px-7 max-w-screen-md lg:max-w-screen-xl mx-auto'>
          <div className='flex-between flex-col sm:flex-row space-y-3.5 sm:space-y-0'>
            <p className='text-light sm:text-left text-center'>
              Designed & Developed by
              <br className='hidden sm:block' />{' '}
              <a
                className='text-primary font-medium hover:underline'
                href='https://github.com/sam4web/'
              >
                Sam4Web
              </a>{' '}
              {new Date().getFullYear()}.
            </p>

            <ul className='text-light flex-center space-x-4 md:space-x-5'>
              {FOOTER_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a href={link.ref} target='_blank' className='footer-link'>
                    <span className='footer-link-text hidden md:block'>
                      {link.title}
                    </span>
                    <span className='text-[22px] block md:hidden'>
                      {createReactIcon(link.icon)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
