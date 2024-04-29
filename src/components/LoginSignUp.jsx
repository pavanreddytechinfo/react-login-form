import React, { useState } from 'react';
import './LoginSignUp.css'; // Import your CSS file

function LoginSignupForm() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginEmailError, setLoginEmailError] = useState('');
    const [loginPasswordError, setLoginPasswordError] = useState('');
    const [signupEmailError, setSignupEmailError] = useState('');
    const [signupPasswordError, setSignupPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSignupClick = () => {
        const loginForm = document.querySelector(".form-inner form.login");
        const loginText = document.querySelector(".title-text .login");
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
        // Reset login form values
        setLoginEmail('');
        setLoginPassword('');
        setLoginEmailError('');
        setLoginPasswordError('');
    };

    const handleLoginClick = () => {
        const loginForm = document.querySelector(".form-inner form.login");
        const loginText = document.querySelector(".title-text .login");
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
        // Reset signup form values
        setSignupEmail('');
        setSignupPassword('');
        setConfirmPassword('');
        setSignupEmailError('');
        setSignupPasswordError('');
        setConfirmPasswordError('');
    };

    const handleSignupLinkClick = (e) => {
        e.preventDefault();
        document.getElementById("signup").checked = true;
        handleSignupClick();
    };

    const validateLoginEmail = () => {
        if (!loginEmail) {
            setLoginEmailError('Please enter your email address');
            return false;
        }
        const isValid = /\S+@\S+\.\S+/.test(loginEmail);
        setLoginEmailError(isValid ? '' : 'Email is invalid');
        return isValid;
    };

    const validateLoginPassword = () => {
        if (!loginPassword) {
            setLoginPasswordError('Please enter your password');
            return false;
        }
        const isValid = loginPassword.length >= 6;
        setLoginPasswordError(isValid ? '' : 'Password must be at least 6 characters');
        return isValid;
    };

    const validateSignupEmail = () => {
        if (!signupEmail) {
            setSignupEmailError('Please enter your email address');
            return false;
        }
        const isValid = /\S+@\S+\.\S+/.test(signupEmail);
        setSignupEmailError(isValid ? '' : 'Email is invalid');
        return isValid;
    };

    const validateSignupPassword = () => {
        if (!signupPassword) {
            setSignupPasswordError('Please enter your password');
            return false;
        }
        const isValid = signupPassword.length >= 6;
        setSignupPasswordError(isValid ? '' : 'Password must be at least 6 characters');
        return isValid;
    };

    const validateConfirmPassword = () => {
        if (!confirmPassword) {
            setConfirmPasswordError('Please confirm your password');
            return false;
        }
        const isValid = confirmPassword === signupPassword;
        setConfirmPasswordError(isValid ? '' : 'Passwords do not match');
        return isValid;
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (validateSignupEmail() && validateSignupPassword() && validateConfirmPassword()) {
            // Signup form submission logic here
            console.log('Signup form submitted');
        } else {
            console.log('Signup form has errors');
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (validateLoginEmail() && validateLoginPassword()) {
            // Login form submission logic here
            console.log('Login form submitted');
        } else {
            console.log('Login form has errors');
        }
    };

    return (
        <div className="wrapper">
            <div className="title-text">
                <div className="title login">
                    Login Form
                </div>
                <div className="title signup">
                    Signup Form
                </div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" defaultChecked />
                    <input type="radio" name="slide" id="signup" />
                    <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
                    <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>Signup</label>
                    <div className="slider-tab"></div>
                </div>
                <div className="form-inner">
                    <form action="#" className="login" onSubmit={handleLoginSubmit}>
                        <div className="field">
                            <input type="text" placeholder="Email Address" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} onBlur={validateLoginEmail} />
                            {loginEmailError && <div className="error">{loginEmailError}</div>}
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                            {loginPasswordError && <div className="error">{loginPasswordError}</div>}
                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">
                            Not a member? <a href="" onClick={handleSignupLinkClick}>Signup now</a>
                        </div>
                    </form>
                    <form action="#" className="signup" onSubmit={handleSignupSubmit}>
                        <div className="field">
                            <input type="text" placeholder="Email Address" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} onBlur={validateSignupEmail} />
                            {signupEmailError && <div className="error">{signupEmailError}</div>}
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} onBlur={validateSignupPassword} />
                            {signupPasswordError && <div className="error">{signupPasswordError}</div>}
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validateConfirmPassword} />
                            {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                        </div>
                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Signup" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginSignupForm;
