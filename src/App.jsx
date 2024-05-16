import { Header } from '@/components';
// import { Home } from '@/pages';

const App = () => {
  return (
    <>
      <Header />
      <main className=' max-w-screen-sm lg:max-w-screen-xl mx-auto w-full h-screen '>
        <div className='px-4 sm:px-7'>{/* <Home /> */}</div>
      </main>
    </>
  );
};

export default App;
