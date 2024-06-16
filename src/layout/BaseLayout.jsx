import { Header, Footer } from '@/components';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Layout = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Navigate to='/home' />;
  }

  return (
    <>
      <ScrollToTop />
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
