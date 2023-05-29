import React, { useState } from 'react';
import "./Signup.css";

function Signup(props) {
    const [firstname, setFirstname] = useState(" ");
    const [middlename, setMiddlename] = useState(" ");
    const [surname, setSurname] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [registerAs, setRegisterAs] = useState(" ");
    const [licenseNumber, setLicenseNumber] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ");
    const [acceptTerms, setAcceptTerms] = useState(" ");

    const handleRegister = (e) => {
        e.preventDefault();
        //Handle registration logic here
        console.log("Register clicked");
        console.log("First Name:", firstname);
        console.log("Middle Name:", middlename);
        console.log("Surname:", surname);
        console.log("Email:", email);
        console.log("Register As:", registerAs);
        console.log("License Number:", licenseNumber);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("Accept Terms:", acceptTerms);
    };

    const handleLogin = (e) => {
        //Handle login here
        console.log("Already have an account? Login clicked");
    };
  return (
    <div className='contain1'>
        <section>
            <img src={logo2} alt='Logo2' />
        </section>
        <section className='create-account'>
            <h2>Create Account</h2>
            <div className='account-details'>
                <form action='' className='input-form' onSubmit={handleRegister}>
                   <div className='names'>
                      <div className='first-name'>
                          <label htmlFor='firstname'>First Name</label>
                          <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                       </div>
                       <div className='middlename'>
                          <label htmlFor='middlename'>Middle Name</label>
                          <input type='text' value={middlename} onChange={(e) => setFirstname(e.target.value)} />
                       </div>
                   </div>
                   <label htmlFor='surname'>Surname</label>
                   <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
                  
                   <label htmlFor='email'>Email Address</label>
                   <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                  
                   <div className='for-password'>
                       <div className='password'>
                          <label htmlFor='password'>Password</label>
                          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                       </div>
                       <div className='confirm-password'>
                          <label htmlFor='confirmpassword'>Confirm Password</label>
                          <input type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                       </div>
                   </div>
                   <div>
                      <input type='checkbox' checked={acceptTerms} onClick={(e) => setAcceptTerms(e.change.value)} />
                      <label>I accept all <a href=''>terms & condition</a></label>
                   </div>
                </form>
                <div>
                    <button className='proceed'>CREATE ACCOUNT</button>
                </div>
                <footer className='goto-login' onClick={() => props.onFormSwitch("login")}>
                    Already have an account? <a href=''>Login</a>
                </footer>
            </div>
        </section>
    </div>
  );
};

export default Signup;
