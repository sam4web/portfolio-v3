import useStore from '@/store';
import { createElement } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const SocialItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target='_blank'>
        <span className='underline-text capitalize hidden md:block font-montserrat'>
          {title}
        </span>
        <span className='text-[22px] block md:hidden' title={title}>
          {createElement(icon)}
        </span>
      </a>
    </li>
  );
};

const Footer = () => {
  const social = useStore((state) => state.social);

  return (
    <footer>
      <div className='bg-dark dark:bg-slate-900'>
        <div className='py-4 lg:py-6 px-4 lg:px-7 max-w-screen-md lg:max-w-screen-xl mx-auto'>
          <div className='flex-between flex-col sm:flex-row space-y-3.5 sm:space-y-0'>
            <p className='text-light sm:text-left text-center font-montserrat'>
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

            <ul className='text-light flex-center space-x-4'>
              <SocialItem
                url={`mailto:${social.email}`}
                title={'email'}
                icon={FiMail}
              />
              <SocialItem
                url={social.instagram}
                title={'instagram'}
                icon={FaInstagram}
              />
              <SocialItem
                url={social.github}
                title={'github'}
                icon={FaGithub}
              />
              <SocialItem
                url={social.linkedin}
                title={'linkedin'}
                icon={FaLinkedin}
              />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
