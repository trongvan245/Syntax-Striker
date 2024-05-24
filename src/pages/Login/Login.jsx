import { useEffect, useState, useContext } from 'react'
import './Login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import AccountManagement from '../../model/AccountManagement.jsx'
import { AuthContext } from '/src/components/Context.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(useContext(AuthContext) ? true : false)

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuth) return
      await AccountManagement.isAuth((result) => {
        setIsAuth(result)
      })
    }
    checkAuth()
  }, [isAuth])

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const loginResult = (response) => {
      window.alert(response.message)
      window.location.href = '/'
    }
    $('#login-button').html(
      `<div class="spinner-border text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>`
    )
    $('#login-button').prop('disabled', true)
    $('#login-button').css('cursor', 'not-allowed')
    $('#login-button').css('background-color', 'gray')
    $('#login-button').css('padding', '5px 10px')
    AccountManagement.login(email, password, loginResult)
  }

  if (isAuth) {
    window.location.href = '/'
    return <></>
  } else
    return (
      <div className='login-page'>
        <div className='login-form-container'>
          <div className='logo'>
            <img
              src='/src/assets/Images/logo.png'
              alt='Logo'
              style={{
                height: '80px'
              }}
            />
          </div>
          <form className='login-form' onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
            <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} required />
            <div className='login-options'>
              <label>
                <input type='checkbox' />
                Remember me
              </label>
              <a href='#' className='forgot-password'>
                Forgot password
              </a>
            </div>
            <button type='submit' className='login-button' id='login-button'>
              Log In
            </button>
            <div className='divider'>or</div>

            <div className='social-buttons'>
              <button className='social-button google' disabled={true}>
                <FontAwesomeIcon icon={faGoogle} size='2x' />
              </button>
              <button className='social-button twitter'>
                <FontAwesomeIcon icon={faTwitter} size='2x' disabled={true} />
              </button>
              <button className='social-button facebook'>
                <FontAwesomeIcon icon={faFacebook} size='2x' disabled={true} />
              </button>
            </div>

            <div className='divider-dash'></div>

            <button className='register-button'>Create new account</button>
          </form>
        </div>
        <div className='login-image-container'>
          <img
            src='/src/assets/Images/Register/cooker_masterchefVN.webp'
            alt='Chef'
            style={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
          />
        </div>
      </div>
    )
}
