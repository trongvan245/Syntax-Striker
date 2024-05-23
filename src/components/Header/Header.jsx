import './Header.scss'

export default function Header() {
  return (
    <>
      <div className='bg-secondary-1 d-flex'>
        <div
          className='d-flex justify-content-center align-items-center'
          style={{
            width: '25%'
          }}
          id='logo'
        >
          <img src='/src/assets/Images/Header/Logo-DH-Cong-Nghe-Thong-Tin-UIT-V.webp' alt='UIT Logo' />
          <img src='/src/assets/Images/Header/800px-HCMUT_official_logo.png' alt='HCMUT Logo' />
        </div>
        <div
          style={{
            width: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ul className='m-0'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Quick Start</a>
            </li>
            <li>
              <a href='/'>References</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </div>
        <div
          className='d-flex'
          style={{
            width: '15%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
          id='login'
        >
          <a
            href='/login'
            style={{
              borderRight: '1px solid white'
            }}
          >
            Sign In
          </a>
          <a href='/register'>Sign Up</a>
        </div>
      </div>
    </>
  )
}
