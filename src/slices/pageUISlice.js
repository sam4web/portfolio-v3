const initialState = {
  isLoading: true,
  showSidenav: false,
  showModel: false,
  modelMessage: '',
};

const pageUISlice = (set) => ({
  ...initialState,
  setLoading: (loading) => set({ isLoading: loading }),
  closeSidenav: () => set({ showSidenav: false }),
  toggleSidenav: () => set((state) => ({ showSidenav: !state.showSidenav })),
  closeModel: () => set({ showModel: false, modelMessage: '' }),
  openModel: (msg) => set({ showModel: true, modelMessage: msg }),
});

export default pageUISlice;
