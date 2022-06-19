import React from 'react';
import './register.css';

export default function Register() {
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
          <div className="registerBox">
            <input type="text" placeholder="Username" className="registerInput" />
            <input type="text" placeholder="Email" className="registerInput" />
            <input type="text" placeholder="Password" className="registerInput" />
            <input type="text" placeholder="Password Again" className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">register into account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
