import { RouterProvider } from 'react-router-dom';
import { useProfileContext } from '@/context';
import router from '@/routes';
import { useEffect, useState } from 'react';
import { Loader } from '@/components';
import { fetchProfileData } from '@/service/api';

const App = () => {
  const { dispatch } = useProfileContext();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProfileData();
      if (data) {
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
