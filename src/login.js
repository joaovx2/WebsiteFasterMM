import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
// Remove or comment out the logo import for now
// import logo from './logo.png';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // Here you would typically handle sign in
        console.log("Sign in attempted with:", email, password);
        // For now, let's just navigate to home page
        navigate('/');
    }

    const register = e => {
        e.preventDefault();
        // Here you would typically handle registration
        console.log("Registration attempted with:", email, password);
        // For now, let's just navigate to home page
        navigate('/');
    }

    return (
        <div className='login'>
            <Link to='/'>
                {/* Comment out or remove the img tag if you don't have a logo file */}
                {/* <img
                    className="login__logo"
                    src={'logo'}
                    alt="Logo"
                /> */}
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to our Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login;