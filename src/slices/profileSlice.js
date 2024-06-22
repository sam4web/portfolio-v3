const initialState = {
  featuredProjects: [],
  projects: [],
  skills: [],
  social: {},
};

const profileSlice = (set) => ({
  ...initialState,
  setProfileData: (data) => set({ ...data }),
});

export default profileSlice;
