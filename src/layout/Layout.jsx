import { Header, Footer } from '@/components';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Navigate to='/home' />;
  }

  return (
    <main className='size-full min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
