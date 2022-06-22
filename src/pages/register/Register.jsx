import React, { useRef } from 'react';
import './register.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Flyingbird</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Flyingbird
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Password"
              required
              ref={password}
              minLength="6"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              required
              ref={passwordAgain}
              minLength="6"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">register into account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
