import { About, Contact, Hero, Projects, Skills } from '@/components';
import usePageTitle from '@/hooks/usePageTitle';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  usePageTitle('');

  return (
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
  );
};

export default Home;
