import BaseLayout from '@/layout/BaseLayout';
import { Archive, Home, Resume, NotFound } from '@/pages';

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
        <Route path='resume' element={<Resume />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
