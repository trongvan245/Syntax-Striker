import { useState } from 'react'
import './Register.css'

const Register = () => {
  const [form, setForm] = useState({
    restaurantName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    ownerName: '',
    faxNumber: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(form)
  }

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-section'>
          <h2>Register</h2>
          <input
            type='text'
            name='restaurantName'
            placeholder='Restaurant name*'
            value={form.restaurantName}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email address*'
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password*'
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm password*'
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <label>
            <input type='checkbox' required /> I accept the terms and privacy policy
          </label>
          <button type='submit'>Sign up</button>
          <p>
            Already have an account? <a href='/login'>Log in</a>
          </p>
          <div className='social-login'>
            <button>Sign up with Google</button>
            <button>Sign up with Facebook</button>
            <button>Sign up with X</button>
          </div>
        </div>
        <div className='form-section contact'>
          <h2>Contact</h2>
          <input
            type='text'
            name='ownerName'
            placeholder='Owner fullname'
            value={form.ownerName}
            onChange={handleChange}
          />
          <input
            type='tel'
            name='phoneNumber'
            placeholder='Phone number'
            value={form.phoneNumber}
            onChange={handleChange}
          />
          <input type='text' name='faxNumber' placeholder='Fax number' value={form.faxNumber} onChange={handleChange} />
          <button type='button' className='mark-location'>
            Mark restaurant location
          </button>
          <button type='submit' className='confirm'>
            Confirm
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
