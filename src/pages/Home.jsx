import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
  PageTitle,
} from '@/components';

const Home = () => {
  return (
    <>
      <PageTitle title={''} />
      <section className='h-full'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </section>
    </>
  );
};

export default Home;
