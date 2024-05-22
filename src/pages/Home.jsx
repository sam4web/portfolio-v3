import { About, Contact, Hero, Loader, Projects, Skills } from '@/components';
import { useProfileContext } from '@/context';
import { useEffect, useState } from 'react';

const Home = () => {
  const { dispatch } = useProfileContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch('http://localhost:5000/data.json');
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ ...json });
      }
    };

    setTimeout(() => {
      fetchProfileData();
    }, 1000);
  }, [dispatch]);

  if (loading) return <Loader />;

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
