import { Footer, Header, PageTitle } from '@/components';
import { Archive, Home } from '@/pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className='w-full h-screen flex flex-col'>
      <Header />
      <div className='flex-1'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <PageTitle title='' />
                <Home />
              </>
            }
          />
          <Route
            path='/archive'
            element={
              <>
                <PageTitle title='Archive' />
                <Archive />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
