import { Emoji } from '@/components';

const Hero = () => {
  return (
    <section>
      <div className='wrapper'>
        <div className='my-10 h-[75vh] sm:h-[90vh]'>
          <div className='h-full flex items-center'>
            <div className='space-y-3 md:space-y-6 lg:space-y-8 sm:max-w-xl lg:max-w-screen-md'>
              <h1 className='main-title'>
                I&#8217;m Sijal Manandhar, a developer who loves to innovate.{' '}
                <Emoji symbol='👋🏻' label='wave' />
              </h1>

              <p className='about-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quod voluptates praesentium magnam molestias
                eligendi est temporibus. Est maxime labore nobis asperiores
                veritatis aspernatur sapiente ducimus laborum nostrum ratione.
                Mollitia!
              </p>

              <p className='about-text'>
                Lorem ipsum dolor sit amet consectetur{' '}
                <a href='#'>adipisicing</a> elit. Officiis, culpa facere! Magni
                fuga a nam ex expedita, autem ratione cumque.
              </p>

              <a
                href='mailto:sijal.m06@gmail.com'
                target='_blank'
                className='inline-block'
              >
                <button className='btn'>Contact me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
