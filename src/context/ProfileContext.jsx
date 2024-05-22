import { createContext, useContext, useReducer } from 'react';

const ProfileContext = createContext({});

const useProfile = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      featuredProjects: [],
      projects: [],
      skills: [],
      socialInfo: [],
    }
  );

  return {
    dispatch,
    ...state,
  };
};

const ProfileContextProvider = ({ children }) => {
  return (
    <ProfileContext.Provider value={useProfile()}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

export default ProfileContextProvider;
