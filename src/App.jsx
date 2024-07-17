import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import useStore from '@/store';
import data from '@/resources/data.json';

const App = () => {
  const setProfileData = useStore((state) => state.setProfileData);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setProfileData(data);
    setLoader(false);
  }, [setProfileData]);

  if (loader) return <Loader />;

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
