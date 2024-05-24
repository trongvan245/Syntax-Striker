import { useParams } from 'react-router-dom'
import menuData from './menuData.json'

import './ShowMenuPage.scss'
import Rating from '../Restaurants/Rating'

const ShowMenuPage = () => {
  const { id } = useParams()
  const restaurant = Object.keys(menuData).find((key) => key === id)
  const menuList = restaurant ? menuData[restaurant].food_items : []

  return (
    <>
      <div className='HeadingContainer'>
        <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride='carousel'>
          <div className='carousel-inner' style={{ maxHeight: window.innerWidth < 992 ? '200px' : '400px' }}>
            <div className='carousel-item active text-center'>
              <img src='\src\assets\images\Restaurants\slide1.png' className='img-fluid w-100' alt='Slide 1' />
            </div>
            <div className='carousel-item'>
              <img src='\src\assets\Images\Restaurants\slide2.png' className='img-fluid w-100' alt='Slide 2' />
            </div>
            <div className='carousel-item'>
              <img src='\src\assets\Images\Restaurants\slide3.png' className='img-fluid w-100' alt='Slide 3' />
            </div>
            <div className='carousel-item'>
              <img src='\src\assets\Images\Restaurants\slide4.png' className='img-fluid w-100' alt='Slide 4' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='heading-menu'>Restaurant Menu</h1>
        <div className='menuItemsConainer'>
          <div className='menuItems'>
            {menuList.map((item) => (
              <div key={item.id} className='menuItem'>
                <img src={item.image} alt={item.name} className='menuItemImage' />
                <div className='menuItemInfo'>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{item.name}</h3>
                  {/* <p>{item.description}</p> */}
                  <h3> Giá: {item.pricing} VNĐ</h3>
                  <p className='menuItemPrice'>{item.price}</p>
                  <Rating rating={item.rating} style={{ display: 'inline' }} />
                </div>
                <button className='orderButton' style={{ alignContent: 'center', display: 'inline' }}>
                  Đặt hàng
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowMenuPage
