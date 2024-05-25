import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import { fetchProfileData } from '@/service/api';
import { useProfileContext } from '@/context/ProfileContext';

const App = () => {
  const { dispatch } = useProfileContext();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProfileData();
      if (data) {
        dispatch(...data);
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
