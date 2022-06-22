import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '62afb569e5f51401c5080587',
    username: 'johny',
    email: 'johny@gmail.com',
    profilePicture: 'person/1.jpeg',
    coverPicture: '',
    followers: [],
    isAdmin: false,
    followings: [],
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
