import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './ShowMenuPage.scss'
import Rating from '../Restaurants/Rating'
import { WiStars } from 'react-icons/wi'

const ShowMenuPage = () => {
  const [menuData, setMenuData] = useState([])
  const { id } = useParams()
  const location = useLocation()
  const restaurantDetails = location.state || {}

  // console.log(restaurantDetails)

  useEffect(() => {
    $.ajax({
      url: 'https://syntax-striker.onrender.com/menu/get-menu',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ menu_id: '6650cfb4ed65982ce6eddcb7' }),
      success: (response) => {
        // console.log(response.items)
        setMenuData(response.items)
      },
      error: (error) => {
        console.log('Error fetching data:', error)
        alert('Lỗi truy cập dữ liệu từ server (Error: ' + error.message + ').\n' + 'Vui lòng thử lại sau !!!')
      }
    })
  }, [id])

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
        <h1 className='heading-menu'>
          <WiStars /> Khám phá Thực đơn Nhà hàng <WiStars />
        </h1>
        {menuData.length > 0 ? (
          <div className='menuItemsContainer'>
            <div className='restaurant-details'>
              <h2>Nhà hàng {restaurantDetails.name}</h2>
              <p>
                Địa chỉ: {restaurantDetails.address} -- Quận/Huyện: {restaurantDetails.location}
              </p>
              <p>Liên hệ: {restaurantDetails.phone_number}</p>
              {/* <Rating rating={restaurantDetails.rating} style={{ display: 'inline' }} /> */}
            </div>
            <div className='menuItems'>
              {menuData.map((item) => (
                <div key={item._id} className='menuItem'>
                  <img src={item.avatar} alt={item.name} className='menuItemImage' />
                  <div className='menuItemInfo'>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{item.name}</h3>
                    {item.description && <p>Mô tả: {item.description}</p>}
                    <h3>Giá: {item.price} VNĐ</h3>
                    <Rating rating={item.rating} style={{ display: 'inline' }} />
                  </div>
                  <button className='orderButton' style={{ alignContent: 'center', display: 'inline' }}>
                    Đặt hàng
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='menuItemsContainer ' style={{ fontSize: '22px', fontWeight: 'bold', color: 'red' }}>
            {' '}
            No menu items available
          </div>
        )}
      </div>
    </>
  )
}

export default ShowMenuPage
