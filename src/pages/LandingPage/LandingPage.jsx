import Intro from '../../components/LandingPage/LandingPageIntro'
import Address from '../../components/LandingPage/LandingPageAddress'
// import SampleMenu1 from '../../components/LandingPage/LandingPageSampleMenu1'
import SampleMenu2 from '../../components/LandingPage/Menu/LandingPageSampleMenu2'
import styles from '../../components/LandingPage/LandingPageStyles.module.scss'
import { useState, useEffect } from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit'

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Intro />
      {/* <SampleMenu1 /> */}
      <div
        className='Introducition'
        style={{
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <MDBRow className='mb-3'>
          <MDBCol size='6' className='d-flex justify-content-center align-items-center'>
            <img src='/src/assets/images/yumm-menus.png' alt='Introduction' style={{ width: '100%' }} />
          </MDBCol>
          <MDBCol size='6'>
            <MDBTypography
              variant='h1'
              style={{
                margin: '30px 20px',
                marginTop: '150px',
                fontSize: '40px',
                fontWeight: 'bold'
              }}
            >
              Quản lý nhà hàng và tạo menu online thật dễ dàng với Syntax Strike
            </MDBTypography>
            <MDBTypography
              style={{
                margin: '30px 20px',
                fontSize: '25px'
              }}
            >
              Syntax Strike là nền tảng hoàn hảo cho
              <MDBTypography tag='strong'> quản lý nhà hàng </MDBTypography>
              việc của bạn và tạo ra những
              <MDBTypography tag='strong'> menu trực tuyến</MDBTypography> đẹp mắt, hiệu quả và dễ dàng.
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </div>

      <div
        className='Feature'
        style={{
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <MDBTypography
          className='bg-primary-light'
          variant='h1'
          style={{
            margin: '30px 20px',
            marginTop: '150px',
            fontSize: '40px',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          Những dịch vụ mà Syntax Strike cung cấp cho bạn
        </MDBTypography>
        <MDBContainer>
          <MDBRow>
            <MDBCol size='md'>
              <MDBRow
                className={styles.featureDiv}
                style={{
                  margin: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px'
                }}
              >
                <MDBCol size='lg-4'>
                  <img
                    src='/src/assets/images/manage.png'
                    alt=''
                    style={{
                      width: '100%',
                      margin: '10px'
                    }}
                  />
                </MDBCol>
                <MDBCol size='lg-8'>
                  <MDBTypography
                    style={{
                      margin: '30px 20px',
                      marginBottom: '0px',
                      fontSize: '32px',
                      fontWeight: 'bold'
                    }}
                  >
                    Quản lý nhà hàng
                  </MDBTypography>
                  <MDBTypography
                    style={{
                      margin: '5px 20px',
                      fontSize: '25px',
                      textAlign: 'justify'
                    }}
                  >
                    Quản lý nhà hàng của mình một cách dễ dàng và hiệu quả nhất
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol size='md'>
              <MDBRow
                className={styles.featureDiv}
                style={{
                  margin: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px'
                }}
              >
                <MDBCol size='lg-6' className='d-flex justify-content-center align-items-center'>
                  <img
                    src='/src/assets/images/menu.svg'
                    alt=''
                    style={{
                      width: '100%',
                      margin: '10px'
                    }}
                  />
                </MDBCol>
                <MDBCol size='lg-6'>
                  <MDBTypography
                    style={{
                      margin: '30px 20px',
                      marginBottom: '0px',
                      fontSize: '32px',
                      fontWeight: 'bold'
                    }}
                  >
                    Tạo menu online
                  </MDBTypography>
                  <MDBTypography
                    style={{
                      margin: '5px 20px',
                      fontSize: '25px',
                      textAlign: 'justify'
                    }}
                  >
                    Tạo ra các menu trực tuyến một cách linh hoạt, đơn giản và tiện lợi
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol size='md'>
              <MDBRow
                className={styles.featureDiv}
                style={{
                  margin: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  textAlign: 'justify'
                }}
              >
                <MDBCol size='lg-4'>
                  <img
                    src='/src/assets/images/find.svg'
                    alt=''
                    style={{
                      width: '100%',
                      margin: '10px'
                    }}
                  />
                </MDBCol>
                <MDBCol size='lg-8'>
                  <MDBTypography
                    style={{
                      margin: '30px 20px',
                      marginBottom: '0px',
                      fontSize: '32px',
                      fontWeight: 'bold'
                    }}
                  >
                    Tìm kiếm nhà hàng
                  </MDBTypography>
                  <MDBTypography
                    style={{
                      margin: '5px 20px',
                      fontSize: '25px',
                      textAlign: 'justify'
                    }}
                  >
                    Khách hàng của bạn truy cập thực đơn của bạn mọi lúc mà không cần tải ứng dụng
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol size='md'>
              <MDBRow
                className={styles.featureDiv}
                style={{
                  margin: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px'
                }}
              >
                <MDBCol size='lg-4'>
                  <img
                    src='/src/assets/images/yumm-menus.png'
                    alt=''
                    style={{
                      width: '100%',
                      margin: '10px'
                    }}
                  />
                </MDBCol>
                <MDBCol size='lg-8'>
                  <MDBTypography
                    style={{
                      margin: '30px 20px',
                      marginBottom: '0px',
                      fontSize: '32px',
                      fontWeight: 'bold'
                    }}
                  >
                    Thống kê và báo cáo
                  </MDBTypography>
                  <MDBTypography
                    style={{
                      margin: '5px 20px',
                      fontSize: '25px',
                      textAlign: 'justify'
                    }}
                  >
                    Xem thống kê và báo cáo về doanh thu, số lượng đơn hàng, số lượng khách hàng, ...
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div
        className='ReasonWhy'
        style={{
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <h1></h1>
        <div className='Introducition'>
          <MDBRow className='mb-3'>
            <MDBCol size='6'>
              <MDBTypography
                variant='h1'
                style={{
                  margin: '30px 20px',
                  marginTop: '150px',
                  fontSize: '40px',
                  fontWeight: 'bold',
                  paddingLeft: '80px'
                }}
              >
                Tại sao nên chọn Syntax Strike
              </MDBTypography>
              <MDBTypography
                style={{
                  margin: '30px 20px',
                  fontSize: '25px',
                  paddingLeft: '80px',
                  textAlign: 'justify'
                }}
              >
                Với Syntax Strike, bạn sẽ <MDBTypography tag='strong'>tiết kiệm</MDBTypography> thời gian và công sức
                trong việc quản lý nhà hàng của mình. Hệ thống đơn giản và dễ sử dụng, giúp bạn tối ưu hóa hoạt động
                kinh doanh và tạo ra trải nghiệm ẩm thực tốt nhất cho khách hàng của bạn.
              </MDBTypography>
            </MDBCol>
            <MDBCol
              size='6'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src='/src/assets/images/yumm-menus.png' alt='Introduction' style={{ width: '100%' }} />
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <SampleMenu2 />
      <Address />
      <button
        className={styles.moveToTopButton}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}
        style={{
          display: isVisible ? 'block' : 'none'
        }}
      >
        <i className='fa-solid fa-arrow-up'></i>
      </button>
    </>
  )
}
