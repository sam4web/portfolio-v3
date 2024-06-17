import { About, Contact, Hero, Modal, Projects, Skills } from '@/components';
import usePageTitle from '@/hooks/usePageTitle';
import useStore from '@/store';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  const showModal = useStore((state) => state.showModal);

  usePageTitle('Sam4Web | Sijal Manandhar');

  return (
    <section className='h-full'>
      {showModal ? <Modal /> : ''}

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
