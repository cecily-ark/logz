import React, { useState } from "react";
import "./Signup.css";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [registerAs, setRegisterAs] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    //Handle registration logic here
    console.log("Register clicked");
    console.log("First Name:", firstName);
    console.log("Middle Name:", middleName);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Register As:", registerAs);
    console.log("License Number:", licenseNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Accept Terms", acceptTerms);
  };

  const handleLogin = () => {
    //Handle login here
    console.log("Already have an account? Login clicked");
  };

  return (
    <div className="contain1">
      <section className="image-section"></section>
      <section className="create-account">
        <h2>Create Account</h2>
        <div className="account-details">
          <form action="" className="input-form" onSubmit={handleRegister}>
            <div className="names">
              <div className="first-name">
                <label htmlFor="">first name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="surname">
                <label htmlFor="">Surname</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            <label htmlFor="">Middle name</label>
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Register As</label>
            <input
              type="text"
              value={registerAs}
              onChange={(e) => setRegisterAs(e.currentTarget.value)}
            />
            <div className="for-password">
              <div className="password">
                <label htmlFor="">password</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="confirm-password">
                <label htmlFor="">confirm password</label>
                <input
                  type="text"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="accept">
              <input
                type="checkbox"
                checked={acceptTerms}
                onClick={(e) => setAcceptTerms(e.change.value)}
              />
              <label htmlFor="">
                I accept all <a href=""> terms & condition</a>
              </label>
            </div>
          </form>
          <div className="submit-button">
            <button className="proceed">CREATE ACCOUNT</button>
          </div>
          <footer
            className="goto-login"
            onClick={() => props.onFormSwitch("login")}
          >
            Already an account? <a href="">Login</a>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default Registration;
