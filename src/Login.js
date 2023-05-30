import React, { useState } from 'react';
import './Login.css';
import logo from './asset/Logo.png';


function Login(props) {
    const [email, setEmail] = useState(" ");
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
    <div className='container'>
        <div className='sidebar'>
            <img src={logo} alt='Logo'  />
        </div>
        <div className='content'>
            <div className='login-details'>
                <h2>Login to your account</h2> 

                <form className='form-input' onSubmit={handleLogin}>
                    <label htmlFor='username'>Email address</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor='password'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='*******' name='password' />
                </form>
                <div className='last'>
                    <div className='remember'>
                        <input type='checkbox' name='remember' checked={rememberMe} onChange={handleRememberMe} />
                        <p className='rem-label'>RememberMe</p>
                    </div>

                    <div className='forgot-password'>
                        <button type='button' onClick={handleForgotPassword}>Forgot password</button>
                    </div>
                </div>
                <div className='input-group'>
                    <button type='submit'>Login</button>
                    <button className='link-btn' onClick={() => props.onFormSwitch("signup")}>Don't have an account? Sign up</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
