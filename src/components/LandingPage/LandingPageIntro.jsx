import styles from './LandingPageStyles.module.scss'
import {MDBTypography } from 'mdb-react-ui-kit'

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
          <MDBTypography
            variant='h1'
            style={{
          
              fontSize: '35px',
              fontWeight: 'bold'
            }}
          >
             Menu trực tuyến cho nhà hàng của bạn
          </MDBTypography>
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
          <MDBTypography
            variant='h1'
            style={{
          
              fontSize: '35px',
              fontWeight: 'bold'
            }}
          >
             Việc tạo menu thật là đơn giản
          </MDBTypography>
          <p style={{ textAlign: 'justify' }}>
            Và thật độc đáo. Khám phá những tính năng mới mà chúng tôi mang lại cho bạn.
          </p>
          
        </div>
      </div>
    </>
  )
}

export default Intro
