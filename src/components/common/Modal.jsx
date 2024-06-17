import { FaCheck } from 'react-icons/fa6';

const Submitted = ({ message }) => {
  return (
    <section className='mt-28 md:mt-40'>
      <div className='max-w-screen-sm mx-auto'>
        <div className='text-center space-y-3'>
          <div className='main-title text-6xl md:text-9xl font-semibold flex-center'>
            <span className='bg-primary text-light-body dark:text-dark p-3 rounded-lg'>
              <FaCheck />
            </span>
          </div>
          <p className='paragraph-text'>{message}</p>
        </div>
      </div>
    </section>
  );
};

export default Submitted;
