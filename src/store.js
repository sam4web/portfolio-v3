import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import pageUISlice from '@/slices/pageUISlice';

const store = (set) => ({
  ...pageUISlice(set),
});

const useStore = create(devtools(store), { name: 'store' });

export default useStore;
