import { About, Contact, Hero, Modal, Projects, Skills } from '@/components';
import usePageTitle from '@/hooks/usePageTitle';
import useStore from '@/store';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  usePageTitle('Sam4Web | Sijal Manandhar');

  const showModal = useStore((state) => state.showModal);

  return (
    <section className='h-full'>
      {showModal ? <Modal /> : ''}

      <Hero />

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
