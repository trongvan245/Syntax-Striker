// import { useState } from 'react'
// import './Login.css'

export default function Login() {
  return (
    <div className='login-page'>
      <div className='login-form-container'>
        <div className='logo'>
          {/* Add your logo image here */}
          {/* <img src="path-to-logo.png" alt="Logo" /> */}
        </div>
        <form className='login-form'>
          <h2>Log In</h2>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <div className='login-options'>
            <label>
              <input type='checkbox' />
              Remember me
            </label>
            <a href='#' className='forgot-password'>
              Forgot password
            </a>
          </div>
          <button type='submit' className='login-button'>
            Log In
          </button>
          <div className='divider'>or</div>
          <div className='social-login'>
            <button type='button' className='social-button google'>
              Google
            </button>
            <button type='button' className='social-button twitter'>
              Twitter
            </button>
            <button type='button' className='social-button facebook'>
              Facebook
            </button>
          </div>
        </form>
      </div>
      <div className='login-image-container'>
        {/* Add your background image or any content here */}
        <img src='path-to-chef-image.png' alt='Chef' />
      </div>
    </div>
  )
}
