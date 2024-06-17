const initialState = {
  showSidenav: false,
  showModel: false,
  modelMessage: '',
};

const pageUISlice = (set) => ({
  ...initialState,
  closeSidenav: () => set({ showSidenav: false }),
  toggleSidenav: () => set((state) => ({ showSidenav: !state.showSidenav })),
  closeModel: () => set({ showModel: false, modelMessage: '' }),
  openModel: (msg) => set({ showModel: true, modelMessage: msg }),
});

export default pageUISlice;
