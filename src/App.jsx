import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import useStore from '@/store';

const App = () => {
  const setProfileData = useStore((state) => state.setProfileData);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();

      if (response.ok) {
        setProfileData(data);
        setLoader(false);
      }
    };
    fetchData();
  }, [setProfileData]);

  if (loader) return <Loader />;

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
