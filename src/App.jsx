import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import { useProfileContext } from '@/context/ProfileContext';

const App = () => {
  const { dispatch } = useProfileContext();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();

      if (response.ok) {
        dispatch(data);
        setLoader(false);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loader) return <Loader />;

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
