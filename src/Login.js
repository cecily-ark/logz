import React, { useState } from 'react'
import './Login.css';
import logo from './Logo.png';


function Login(props) {

    const[username, setUsername] = useState(' ');
    const[password, setPassword] = useState(' ');
    const[rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        //Handle login logic here
        console.log('Login clicked');
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleForgotPassword = () => {
        //Handle forgot password logic here
        console.log('Forgot password clicked');
    };
  return (
    <div className='container'>
        <div className='sidebar'>
            <img src={logo} alt='Logo' className='logo' />
        </div>
        <div className='content'>
            <h2>Login to your account</h2>
            <form onSubmit={handleLogin}>
                <div className='login-details'>
                    <label htmlFor='username'>Email address</label> 
                    <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                
                    <label htmlFor='password'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='**********' id='password' name='password' />
                
                </div>
                <div className='last'>
                <div className='remember'>
                    <input type='checkbox' name='remember' checked={rememberMe} onChange={handleRememberMe} />
                    <p className='rem-label'>Remember me</p>
                </div>
                </div>
                <div className='forgot-password'>
                    <button type='button' onClick={handleForgotPassword}>Forgot password</button>
                </div>
                <div className='input-group'>
                    <button type='submit'>Login</button>
                </div>
                <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Dont have an account? Sign up</button>
            </form>
        </div>
    </div>
  );
};

export default Login;
