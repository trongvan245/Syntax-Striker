import styles from './Menu2.module.scss'
import menuData from './menuData'

function SampleMenu2() {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.headingMenu}>Restaurant Menu</h1>
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
  )
}
export default SampleMenu2
