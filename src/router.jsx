import BaseLayout from '@/layout/BaseLayout';
import Archive from '@/pages/Archive';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<BaseLayout />}>
        <Route path='home' element={<Home />} />
        <Route path='archive' element={<Archive />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
