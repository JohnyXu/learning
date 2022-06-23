import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '62b43d9b416563fc5985ea85',
    username: 'sarah',
    email: 'sarah@gmail.com',
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
