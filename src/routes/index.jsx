import Layout from '@/layout/Layout';
import Archive from '@/pages/Archive';
import Home from '@/pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Route>
    </>
  )
);

export default router;
