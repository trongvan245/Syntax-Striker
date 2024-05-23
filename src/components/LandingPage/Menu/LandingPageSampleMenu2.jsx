import './Menu2.scss'
import menuData from './menuData';


function SampleMenu2() {
  return (
    <div className="menu-container">
      <h1 className='heading-menu'>Restaurant Menu</h1>
      <div className="menu-items">
        {menuData.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-info">
              <h3 style={{fontWeight:"bold"}}>{item.name}</h3>
              <p>{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
            <button className='order-button'>Đặt hàng</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SampleMenu2
