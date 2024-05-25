import { useProfileContext } from '@/context/ProfileContext';

const Contact = () => {
  const { social } = useProfileContext();

  return (
    <section>
      <div className='wrapper'>
        <div className='section-spacing'>
          <div className='space-y-1.5 text-center'>
            <h2 className='section-title section-title-center'>Get In Touch</h2>
            <br />
            <p className='section-subtitle'>Contact</p>
          </div>

          <div className='sm:max-w-xl mx-auto'>
            <p className='paragraph-text text-center'>
              Although I&apos;m currently focused on my job search, I&apos;m
              open to networking and new connections. Whether you have a
              question or just want to say hello, feel free to reach out!
            </p>
          </div>

          <div className='flex-center'>
            <a href={`mailto:${social.email}`} target='_blank'>
              <button className='btn'>Say Hello</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
