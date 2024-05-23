import Intro from '../../components/LandingPage/LandingPageIntro'
import Address from '../../components/LandingPage/LandingPageAddress'
import SampleMenu1 from '../../components/LandingPage/LandingPageSampleMenu1'
import SampleMenu2 from '../../components/LandingPage/Menu/LandingPageSampleMenu2'
import styles from '../../components/LandingPage/LandingPageStyles.module.scss'
import { useState, useEffect } from 'react'

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
      <SampleMenu1 />
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
