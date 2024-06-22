import { Emoji } from '@/components';
import useStore from '@/store';

const Hero = () => {
  const social = useStore((state) => state.social);

  return (
    <section>
      <div className='wrapper'>
        <div className='my-10 h-[75vh] sm:h-[83vh]'>
          <div className='h-full flex items-center'>
            <div className='space-y-3 md:space-y-6 lg:space-y-8 sm:max-w-xl lg:max-w-screen-md'>
              <h1 className='main-title'>
                I&#8217;m Sijal Manandhar, a developer who loves to innovate.{' '}
                <Emoji symbol='👋🏻' label='wave' />
              </h1>

              <p className='paragraph-text'>
                I focus on creating practical, data-driven solutions that fit
                each project&apos;s needs. I handle everything from front-end
                design to back-end functionality, ensuring tasks are done
                efficiently and logically. My goal is to build web experiences
                that improve lives, bring ideas to life, and make a positive
                impact.
              </p>

              <p className='paragraph-text'>
                I love coding, contributing to developer communities on{' '}
                <a href={social.github} target='_blank'>
                  Github
                </a>{' '}
                , sharing my workflow tips, and connecting with fellow tech
                enthusiasts on{' '}
                <a href={social.linkedin} target='_blank'>
                  LinkedIn
                </a>
                .
              </p>

              <button
                className='btn'
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
