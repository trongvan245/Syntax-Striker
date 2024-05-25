import styles from './Menu2.module.scss'
import menuData from './menuData'
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit'

function SampleMenu2() {
  return (
    <>
      <MDBTypography
        variant='h1'
        className='bg-primary-light'
        style={{
          margin: '30px 20px',
          marginTop: '150px',
          fontSize: '45px',
          fontWeight: 'bold',
          textAlign: 'center',

          padding: '20px'
        }}
      >
        Menu mẫu cho nhà hàng
      </MDBTypography>
      <div className={styles.menuContainer}>
        <div className={styles.menuItems}>
          {menuData.map((item) => (
            <div key={item.id} className={styles.menuItem}>
              <img src={item.image} alt={item.name} className={styles.menuItemImage} />
              <div className={styles.menuItemInfo}>
                <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                <p>{item.description}</p>
                <p className={styles.menuItemPrice}>{item.price}</p>
              </div>
              <button className={styles.orderButton}>Đặt hàng</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default SampleMenu2
