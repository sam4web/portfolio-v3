import { Footer, Header } from '@/components';
import { Home } from '@/pages';

const App = () => {
  return (
    <div className='size-full'>
      <Header />
      <main>
        {/* <main className='wrapper'> */}
        {/* <div className='px-4 sm:px-7 size-full'> */}
        <Home />
        {/* </div> */}
        {/* </main> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
