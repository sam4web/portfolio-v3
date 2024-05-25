import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
  PageTitle,
} from '@/components';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  return (
    <>
      <PageTitle title={''} />

      <section className='h-full'>
        <ScrollAnimation animateIn='fadeIn'>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'>
          <About />
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn'>
          <Projects />
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn'>
          <Skills />
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn'>
          <Contact />
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Home;
