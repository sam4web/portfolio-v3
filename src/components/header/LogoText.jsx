import { useHeaderContext } from '@/context/HeaderContext';
import { Link } from 'react-router-dom';

const LogoText = () => {
  const { closeSidenav } = useHeaderContext();
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
