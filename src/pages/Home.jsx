import { About, Contact, Hero, Projects, Skills } from '@/components';

const Home = () => {
  return (
    <section className='h-full'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
};

export default Home;
