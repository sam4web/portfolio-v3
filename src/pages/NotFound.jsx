import { PageTitle } from '@/components';

const NotFound = () => {
  return (
    <>
      <PageTitle title={'Page not found'} />
      <section className='mt-28 md:mt-40'>
        <div className='max-w-screen-sm mx-auto'>
          <div className='text-center'>
            <p className='paragraph-text'>
              The page you have been looking is not found!
            </p>
            <h1 className='main-title text-9xl font-semibold'>404</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
