import React, { useState } from 'react'
import './Login.css';
import logo from './Logo.png';


function Login(props) {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      //Handle login logic here
      console.log("Login clicked");
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);
    };
  
    const handleRememberMe = () => {
      setRememberMe(!rememberMe);
    };
  
    const handleForgotPassword = () => {
      //Handle forgot password logic here
      console.log("Forgot password clicked");
    };
    return (
      <div className="container">
        <div className="sidebar">
          {/* <img src="" alt="Logo" className="logo" /> */}
        </div>
        <div className="content">
          <div className="login-details">
            <h2>Login to your account</h2>
  
            <div className="wrap-login"></div>
            <form className="form-input" onSubmit={handleLogin}>
              <label htmlFor="username">Email address</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
  
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="**********"
                name="password"
              />
            </form>
            <div className="last">
              <div className="remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <p className="rem-label">Remember me</p>
              </div>
  
              <div className="forgot-password">
                <button type="button" onClick={handleForgotPassword}>
                  Forgot password
                </button>
              </div>
            </div>
            <div className="input-group">
              <button type="submit">Login</button>
              <button
                className="link-btn"
                onClick={() => props.onFormSwitch("signup")}
              >
                Dont have an account? <a href=""> Sign up</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  