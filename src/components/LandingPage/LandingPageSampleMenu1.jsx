import styles from './LandingPageStyles.module.scss'
function SampleMenu1() {
  return (
    <>
      <div className={`${styles.fullscreenDiv} bg-secondary-1 position-relative`} id='menu1'>
        <div className={`${styles.popup} bg-primary-dark`}>Menu 1</div>
      </div>
    </>
  )
}
export default SampleMenu1
