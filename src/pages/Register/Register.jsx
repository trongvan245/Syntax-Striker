import React from 'react';
import { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
export default function Register() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div>
      <div className = "login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Log In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="">Forgot password</a>
          </div>
          <button type="submit" className="login-button">Log In</button>
          <div className="divider">or</div>
          <div className="social-login">
            <button className="social-button google">Google</button>
            <button className="social-button twitter">Twitter</button>
            <button className="social-button facebook">Facebook</button>
          </div>
        </form>
      </div>
      <div style= {{backgroundColor: "red",height: 100}}>meoem</div>
    </div>
    
  )
}
