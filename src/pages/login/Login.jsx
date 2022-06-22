import React, { useRef } from 'react';
import { useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import './login.css';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Flyingbird</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Flyingbird
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input type="email" required placeholder="Email" className="loginInput" ref={email} />
            <input
              type="password"
              required
              minLength={'6'}
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? <CircularProgress color="success" value={25} /> : 'Log In'}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="success" value={25} />
              ) : (
                'Create a New Account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
