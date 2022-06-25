import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '62b59773d5d35881e821c18b',
    username: 'johny',
    email: 'johny@gmail.com',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
