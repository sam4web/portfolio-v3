import { Link } from 'react-router-dom';
import useStore from '@/store';

const LogoText = () => {
  const closeSidenav = useStore((state) => state.closeSidenav);

  return (
    <Link to='/' className='cursor-pointer' onClick={closeSidenav}>
      <h2 className='text-3xl sm:text-4xl font-nunito font-semibold text-responsive select-none'>
        <span className='text-primary font-bold'>S</span>
        am4Web
        <span className='text-primary font-bold'>.</span>
      </h2>
    </Link>
  );
};

export default LogoText;
