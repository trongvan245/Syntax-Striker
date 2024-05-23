import styles from './LandingPageStyles.module.scss'
function Intro() {
  return (
    <>
      <div>
        <img
          src='/src/assets/Images/LandingPage/background_1.jpg'
          alt='Background'
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            position: 'relative'
          }}
        />
        <div className={styles.myIntroduction}>
          <h2>Menu trực tuyến cho nhà hàng 📝</h2>
          <p>Come hungry, leave happy with Syntax Striker 😁</p>
          <a className='btn btn-primary' href='#contactLandingPage'>
            <i className='fa-solid fa-people-group' />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      <div className={`${styles.fullscreenDiv} ${styles.header2} bg-primary-light`}>
        <img
          src='/src/assets/Images/LandingPage/picture_1.jpg'
          alt='Fish'
          style={{ width: '60%', objectFit: 'cover', maxHeight: '90%' }}
        />
        <div className={styles.introContent2}>
          <p className='display-4' style={{ fontStyle: 'italic' }}>
            Việc tạo menu thật là đơn giản
          </p>
          <p style={{ textAlign: 'justify' }}>
            Và thật độc đáo. Khám phá những tính năng mới mà chúng tôi mang lại cho bạn.
          </p>
          <a className='btn btn-primary mr-2' href='#menu1'>
            <i className='fa-solid fa-book'></i>Menu 1
          </a>
          <a className='btn btn-primary' href='#menu2'>
            <i className='fa-solid fa-book'></i>Menu 2
          </a>
        </div>
      </div>
    </>
  )
}

export default Intro
