import './../Header/Header.scss'

function Logo() {
  return (
    <div className='d-flex justify-content-center align-items-center' id='logo'>
      <img src='/src/assets/Images/Header/Logo-DH-Cong-Nghe-Thong-Tin-UIT-V.webp' alt='UIT Logo' />
      <img src='/src/assets/Images/Header/800px-HCMUT_official_logo.png' alt='HCMUT Logo' />
    </div>
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
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function RegisterHeader() {
  return (
    <nav className='navbar navbar-expand-lg d-flex flex-row-reverse p-0' id='navbarLandingPage'>
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
        <div className='collapse navbar-collapse' id='mynavbar'>
          <Menu />
        </div>
      </div>
    </nav>
  )
}
