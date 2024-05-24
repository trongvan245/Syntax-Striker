import { useState } from 'react'
// import axios from 'axios'
// import Map from './GGMap'
import './Register.scss'
// import { auto } from '@popperjs/core'

/** Register
 *  @returns Registration page
 */
const Register = () => {
  const [form, setForm] = useState({
    restaurantName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    ownerName: '',
    faxNumber: '',
    latCoordinates: '',
    lngCoordinates: ''
  })

  // Location information
  // const [showMap, setShowMap] = useState(false)
  // const [selectedLocation, setSelectedLocation] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const [showContact, setShowContact] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { password, confirmPassword, phoneNumber, faxNumber } = form
    if (password !== confirmPassword) {
      alert('Confirm password does not match password')
      return
    }
    if (phoneNumber && phoneNumber.length !== 10) {
      alert('Phone number must have 10 digits')
      return
    }
    if (faxNumber && faxNumber.length < 10) {
      alert('Fax number must have at least 10 digits')
      return
    }

    setShowContact(true)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form)
    if (!showContact) {
      setShowContact(true)
    } else {
      // Submit form data to API
      try {
        const response = await fetch('https://syntax-striker.onrender.com/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })

        if (!response.ok) {
          const errorData = await response.json()
          console.error('Error:', errorData)
          alert(`Error: ${errorData.message}`)
          return
        }

        const data = await response.json()
        console.log('Success:', data)
        alert('Registration successful!')
      } catch (error) {
        console.error('Error:', error)
        alert('An error occurred. Please try again.')
      }
    }
  }

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-section'>
          <img className='form-section-RestaurantImage' src='src\assets\Images\Register\restaurant.webp' alt='' />
          <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>Register</h2>
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
            <input type='checkbox' required /> {'   '} I accept the terms and privacy policy
          </label>
          <button type='submit' className='form-section-Button'>
            Sign up
          </button>
          <p style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <a href='/login' className='login-link'>
              Log in
            </a>
          </p>
          {/* <div className='social-login'>
            <button>Sign up with Google</button>
            <button>Sign up with Facebook</button>
            <button>Sign up with X</button>
          </div> */}
        </div>

        <div className={`form-section contact ${showContact ? 'show' : ''}`}>
          {!showContact ? (
            <img
              src='src\assets\Images\Register\cooker_masterchefVN.webp'
              alt=''
              className='contact-image'
              style={{ opacity: 0.85 }}
            />
          ) : (
            <>
              <h2 style={{ fontSize: '25px', fontWeight: 'bold' }}>Contact</h2>
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
                placeholder='Phone number*'
                value={form.phoneNumber}
                onChange={handleChange}
                pattern='[0-9]*'
                required
              />
              <input
                type='tel'
                name='faxNumber'
                placeholder='Fax number'
                value={form.faxNumber}
                onChange={handleChange}
                pattern='[0-9]*'
                // required
              />
              {/* <button type='button' className='mark-location'onClick={() => setShowMap(true)}> */}
              <button type='button' className='mark-location'>
                Select your restaurant location
              </button>
              {/* {showMap && (
                <MapComponent
                  showMap={showMap}
                  setSelectedLocation={setSelectedLocation}
                  setShowMap={setShowMap}
                  selectedLocation={selectedLocation}
                />
              )} */}
              <button type='submit' className='confirm'>
                Confirm
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default Register
