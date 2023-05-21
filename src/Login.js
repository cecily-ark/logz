import React, { useState } from 'react'
import './Login.css';
import logo from './Logo.png';


function Login() {

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
                <div className='input-group'>
                    <label htmlFor='username'>Email address</label> 
                    <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password</label> 
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className='input-group remember'>
                    <input type='checkbox' id='remember' name='remember' checked={rememberMe} onChange={handleRememberMe} />
                    <label htmlFor='remember'>Remember me</label>
                </div>
                <div className='input-group forgot-password'>
                    <button type='button' onClick={handleForgotPassword}>Forgot password</button>
                </div>
                <div className='input-group'>
                    <button type='submit'>Login</button>
                </div>
                <button className='input-group'>Dont have an account? Sign up</button>
            </form>
        </div>
    </div>
  );
};

export default Login;
