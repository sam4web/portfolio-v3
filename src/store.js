import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import pageUISlice from '@/slices/pageUISlice';
import profileSlice from '@/slices/profileSlice';

const store = (set) => ({
  ...pageUISlice(set),
  ...profileSlice(set),
});

const useStore = create(devtools(store), { name: 'store' });

export default useStore;
