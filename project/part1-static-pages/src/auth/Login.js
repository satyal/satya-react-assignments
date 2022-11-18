import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  const setUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const setPassWorkdHandler = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    console.log("in login handler", userName, password);
  };

  const resetLogin = () => {
    console.log("Reset handler");
    setUserName("");
    setPassword("");
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="username">Username*</label>
          </div>
          <div className="ff-content">
            <input
              type="text"
              id="username"
              value={userName}
              onChange={setUserNameHandler}
            />
          </div>
        </div>

        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="password">Password*</label>
          </div>
          <div className="ff-content">
            <input
              type="password"
              id="password"
              value={password}
              onChange={setPassWorkdHandler}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" onClick={login}>
            Login
          </button>
          <button type="button" onClick={resetLogin}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
