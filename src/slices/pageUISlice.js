const initialState = {
  showSidenav: false,
  showModal: false,
  senderName: '',
};

const pageUISlice = (set) => ({
  ...initialState,
  closeSidenav: () => set({ showSidenav: false }),
  toggleSidenav: () => set((state) => ({ showSidenav: !state.showSidenav })),
  closeModal: () => set({ showModal: false, senderName: '' }),
  openModal: (name) => set({ showModal: true, senderName: name }),
});

export default pageUISlice;
