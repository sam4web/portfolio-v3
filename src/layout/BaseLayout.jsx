import { Header, Footer } from '@/components';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (location.pathname === '/') {
    return <Navigate to='/home' />;
  }

  return (
    <>
      <main className='size-full min-h-screen flex flex-col'>
        <Header />
        <div className='flex-1'>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
