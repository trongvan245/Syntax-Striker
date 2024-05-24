import { useState } from 'react'
import './Register.scss'
// import Map from './GGMap'

const hostUrl = 'https://syntax-striker.onrender.com'

/** Register
 *  @returns Registration page
 */
const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone_number: '',
    owner_name: ''
    // faxNumber: '',
    // latCoordinates: '',
    // lngCoordinates: ''
  })

  // Location information
  // const [showMap, setShowMap] = useState(false)
  // const [selectedLocation, setSelectedLocation] = useState(null)

  // Change information in Registration
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const [showContact, setShowContact] = useState(false)

  // Submit Registration
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { password, confirm_password, phone_number } = form

    if (password.length < 6 || password.length > 50) {
      alert('Password length must be from 6 to 50')
      return
    }
    // Validate password expresion
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,50}$/
    if (!passwordRegex.test(password)) {
      alert(
        'Password must be at least 6 characters long and contain at least 1 lowercase letter, 1 uppercase letter and 1 number'
      )
      return
    }

    // Validate confirm password length
    if (confirm_password.length < 6 || confirm_password.length > 50) {
      alert('Password length must be from 6 to 50')
      return
    }

    // Compare password and confirm password
    if (password !== confirm_password) {
      alert('Confirm password does not match password')
      return
    }

    // Validate phone number length
    if (phone_number && phone_number.length !== 10) {
      alert('Phone number must have 10 digits')
      return
    }

    // if (faxNumber && faxNumber.length < 10) {
    //   alert('Fax number must have at least 10 digits')
    //   return
    // }

    setShowContact(true)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    if (!showContact) {
      setShowContact(true)
    } else {
      // Submit form data to API
      console.log(' Submit form data to API')
      console.log(JSON.stringify(form))

      try {
        const url = `${hostUrl}/users/register`
        const response = await $.ajax({
          url: url,
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(form)
        })

        console.log('Success:', response)
        alert('Registration successful!')
        window.location.href = '/'
      } catch (error) {
        // alert(error.responseJSON.message)
        if (
          error.responseJSON &&
          error.responseJSON.errors &&
          error.responseJSON.errors.email &&
          error.responseJSON.errors.email.msg
        ) {
          alert(error.responseJSON.errors.email.msg)
        } else {
          alert((error.responseJSON && error.responseJSON.message) || 'An error occurred. Please try again.')
        }
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
            name='name'
            placeholder='Restaurant name*'
            value={form.name}
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
            name='confirm_password'
            placeholder='Confirm password*'
            value={form.confirm_password}
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
                name='owner_name'
                placeholder='Owner fullname'
                value={form.owner_name}
                onChange={handleChange}
              />
              <input
                type='tel'
                name='phone_number'
                placeholder='Phone number*'
                value={form.phone_number}
                onChange={handleChange}
                pattern='[0-9]*'
                required
              />
              <input
                type='tel'
                name='faxNumber'
                placeholder='Fax number'
                // value={form.faxNumber}
                // onChange={handleChange}
                // pattern='[0-9]*'
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
