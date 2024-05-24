import styles from './Header.module.scss'
import AccountManagement from '../../model/AccountManagement.jsx'
import { useEffect, useState } from 'react'
import { AuthContext } from '/src/components/Context.jsx'

function Logo() {
  return (
    <div className={`${styles.logoSection} d-flex justify-content-center align-items-center`} id='logo'>
      <img src='/src/assets/Images/Header/Logo-DH-Cong-Nghe-Thong-Tin-UIT-V.webp' alt='UIT Logo' />
      <img src='/src/assets/Images/Header/800px-HCMUT_official_logo.png' alt='HCMUT Logo' />
    </div>
  )
}

function LogInSection(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [avatarURL, setAvatarURL] = useState('/src/assets/Images/temp-avatar.jpg')
  const [name, setName] = useState('')

  useEffect(() => {
    const checkAuth = async () => {
      await AccountManagement.isAuth((result) => {
        setIsLoggedIn(result)
        if (isLoggedIn) {
          if (AccountManagement.getAvatarURL()) setAvatarURL(AccountManagement.getAvatarURL())
          setName(AccountManagement.getName())
        }
      })
    }
    checkAuth()
  }, [avatarURL, isLoggedIn, name])

  const ifNotLogin = (
    <div
      className={`d-flex ${styles.login}`}
      style={{
        width: props.width,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
      }}
      id='login'
    >
      <a href='/login'>
        <i className='fa-solid fa-right-to-bracket'></i>
      </a>
      <a href='/register'>
        <i className='fa-solid fa-user-plus'></i>
      </a>
    </div>
  )

  const ifLogin = (
    <div
      className='d-flex'
      style={{
        width: props.width,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%'
      }}
      id='login'
    >
      <div
        className={styles.dropdown}
        onClick={() => {
          $('#HeaderDropdown').toggle()
        }}
      >
        <img
          src={avatarURL}
          alt='Avatar'
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px'
          }}
        />
        <span
          style={{
            fontWeight: 'bold'
          }}
        >
          {name}
        </span>
        <div className={styles.dropdownContent} id='HeaderDropdown'>
          <div>
            <a href='/'>Profile</a>
            <a
              onClick={() => {
                AccountManagement.logout()
              }}
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <AuthContext.Provider value={isLoggedIn} id='isAuth'>
      {isLoggedIn ? ifLogin : ifNotLogin}
    </AuthContext.Provider>
  )
}

function Menu() {
  const menu = [
    { name: 'Home', link: '/' },
    { name: 'Quick Start', link: '/' },
    { name: 'References', link: '/' },
    { name: 'Contact', link: '/' }
  ]
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.landingList}`}>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Header() {
  return (
    <nav
      className={`navbar navbar-expand-lg d-flex flex-row-reverse p-0 ${styles.navbarLandingPage}`}
      id='navbarLandingPage'
    >
      <div className='bg-secondary-1 container-fluid p-1'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#mynavbar'
          style={{
            width: '50px',
            fontSize: '0.8rem'
          }}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a
          href='/'
          className='navbar-brand d-block'
          style={{
            width: '150px'
          }}
        >
          <Logo />
        </a>
        <div className={`collapse navbar-collapse ${styles.landingCollapseSection}`} id='mynavbar'>
          <Menu />
          <div className={`container-fluid ${styles.loginSection}`}>
            <LogInSection width='100%' />
          </div>
        </div>
      </div>
    </nav>
  )
}
