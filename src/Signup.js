import React, { useState } from 'react';
import './Signup.css';


function Registration(props) {
        const[firstName, setFirstName] = useState('');
        const[middleName, setMiddleName] = useState('');
        const[surname, setSurname] = useState('');
        const[email, setEmail] = useState('');
        const[registerAs, setRegisterAs] = useState('');
        const[licenseNumber, setLicenseNumber] = useState('');
        const[password, setPassword] = useState('');
        const[confirmPassword, setConfirmPassword] = useState('');
        const[acceptTerms, setAcceptTerms] = useState('');


        const handleRegister = (e) => {
            e.preventDefault();
            //Handle registration logic here
            console.log('Register clicked');
             console.log('First Name:', firstName);
             console.log('Middle Name:', middleName);
             console.log('Surname:', surname);
             console.log('Email:', email);
             console.log('Register As:', registerAs);
             console.log('License Number:', licenseNumber)
             console.log('Password:', password);
             console.log('Confirm Password:', confirmPassword);
             console.log('Accept Terms', acceptTerms);
        };

        const handleLogin = () => {
            //Handle login here
            console.log('Already have an account? Login clicked');
        };


  return (
    <div className='container'>
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
            <div className='input-group'>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) =>setFirstName(e.target.value)} required />
            </div>
            <div className='input-group'>
                <label htmlFor='middleName'>Middle Name:</label>
                <input type='text' id='middleName' name='middleName' value={middleName} onChange={(e) =>setMiddleName(e.target.value)} />
            </div>
            <div className='input-group'>
                <label htmlFor='surname'>Surname:</label>
                <input type='text' id='surname' name='surname' value={surname} onChange={(e) =>setSurname(e.target.value)} required />
            </div>
            <div className='input-group'>
                <label htmlFor='email'>Email Address:</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) =>setEmail(e.target.value)} required />
            </div>
            <div className='input-group'>
                <label htmlFor='registerAd'>Register As:</label>
                <select id='registerAs' name='registerAs' value={registerAs} onChange={(e) => setRegisterAs(e.target.value)} required>
                    <option value="">Select an option</option>
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                    <option value="option3">Option3</option>
                </select>
            </div>
            <div className='input-group'>
                <label htmlFor='licenseNumber'>License Number</label>
                <input type='text' id='licenseNumber' name='licenseNumber' value={licenseNumber} onChange={(e) =>setLicenseNumber(e.target.value)} />
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' value={password} onChange={(e) =>setPassword(e.target.value)} required />
            </div>
            <div className='input-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)} required />
            </div>
            <div className='input-group'>
                <input type='checkbox' id='acceptTerms' name='acceptTerms' checked={acceptTerms} onChange={() =>setAcceptTerms(!acceptTerms)} required />
                <label htmlFor='acceptTerms'>I accept all terms and conditions</label>
            </div>
            <div className='input-group login'>
            <button type='submit'>Create Account</button>
            </div>
            <div className='input-group'>
                <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
            </div>
        </form>
    </div>
  );
};

export default Registration;
