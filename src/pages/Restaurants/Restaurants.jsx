import { useState, useEffect } from 'react'

import { BsTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { PiCurrencyDollarSimpleFill } from 'react-icons/pi'
import { WiStars } from 'react-icons/wi'

import './Restaurants.scss'
import Rating from './Rating'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'

const locationsInHCMC = [
  'TP. Thủ Đức',
  'Q. 1',
  'Q. 3',
  'Q. 4',
  'Q. 5',
  'Q. 6',
  'Q. 7',
  'Q. 8',
  'Q. 10',
  'Q. 11',
  'Q. 12',
  'Q. Tân Bình',
  'Q. Bình Tân',
  'Q. Bình Thạnh',
  'Q. Tân Phú',
  'Q. Gò Vấp',
  'Q. Phú Nhuận',
  'H. Bình Chánh',
  'H. Hóc Môn',
  'H. Cần Giờ',
  'H. Củ Chi',
  'H. Nhà bè'
]

function Restaurants() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('Best Rating')
  const [locationOption, setLocationOption] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = window.innerWidth < 992 ? 5 : 10

  /** CALL API HERE
   * to get restaurants data
   */
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    $.ajax({
      url: 'https://syntax-striker.onrender.com/users/public',
      method: 'GET',
      success: (response) => {
        setRestaurants(response.data)
      },
      error: (error) => {
        console.error('Error fetching data: ', error)
        alert('Lỗi truy cập dữ liệu từ server (Error: ' + error.message + ').\n' + 'Vui lòng thử lại sau !!!')
      }
    })
  }, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSortChange = (event) => {
    setSortOption(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocationOption(event.target.value)
    console.log('Selected Location:', event.target.value) // Add this line for debugging
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    if (sortOption === 'Best Rating') {
      return b.rating - a.rating
    } else if (sortOption === 'Most Expensive') {
      return b.max_price - a.max_price
    } else if (sortOption === 'Cheapest') {
      return a.min_price - b.min_price
    }
    return 0
  })

  const locationRestaurants = sortedRestaurants.filter((restaurant) =>
    locationOption === 'All' ? true : restaurant.location === locationOption
  )

  const paginatedRestaurants = locationRestaurants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const totalPages = Math.ceil(locationRestaurants.length / itemsPerPage)

  return (
    <>
      <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner' style={{ maxHeight: window.innerWidth < 992 ? '200px' : '400px' }}>
          <div className='carousel-item active'>
            <img src='\src\assets\Images\Restaurants\slide1.png' className='d-block w-100' alt='Slide 1' />
          </div>
          <div className='carousel-item'>
            <img src='\src\assets\Images\Restaurants\slide2.png' className='d-block w-100' alt='Slide 2' />
          </div>
          <div className='carousel-item'>
            <img src='\src\assets\Images\Restaurants\slide3.png' className='d-block w-100' alt='Slide 3' />
          </div>
          <div className='carousel-item'>
            <img src='\src\assets\Images\Restaurants\slide4.png' className='d-block w-100' alt='Slide 4' />
          </div>
        </div>
      </div>
      <div className='restaurants-container'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: window.innerWidth < 992 ? '20px' : '40px',
            fontWeight: 'bold',
            color: '#cc3333'
          }}
        >
          <p className='SearchRestaurantText'>
            <WiStars style={{ fontSize: '30px' }} /> Tìm kiếm nhà hàng bạn yêu thích{' '}
            <WiStars style={{ fontSize: '30px' }} />
          </p>
        </div>
        <div className='search-container'>
          <input type='text' placeholder='Tìm kiếm tên nhà hàng' value={searchTerm} onChange={handleSearchChange} />
          <select value={sortOption} onChange={handleSortChange}>
            <option value='Best Rating'>Đánh giá cao</option>
            <option value='Most Expensive'>Mắc nhất</option>
            <option value='Cheapest'>Rẻ nhất</option>
          </select>
          <select value={locationOption} onChange={handleLocationChange}>
            <option value='All'>Tất cả địa điểm</option>
            {locationsInHCMC.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {locationRestaurants.length > 0 ? (
          <div className='restaurants-grid'>
            {paginatedRestaurants.map((restaurant) => (
              <div className='restaurant-box' key={restaurant._id}>
                <div className='restaurant-info'>
                  <Link style={{ marginLeft: '8px' }} to={`/menu/${restaurant._id}`} state={restaurant}>
                    {restaurant.name}{' '}
                  </Link>
                  <div
                    style={{
                      marginLeft: '8px',
                      fontSize: window.innerWidth < 992 ? '16px' : '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    <Rating rating={restaurant.rating} style={{ display: 'inline' }} />
                  </div>
                  <p
                    style={{
                      marginLeft: '8px',
                      marginTop: '10px',
                      fontSize: window.innerWidth < 992 ? '16px' : '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    {' '}
                    Giá: {restaurant.min_price} - {restaurant.max_price}
                    <PiCurrencyDollarSimpleFill style={{ scale: '120%', color: '#008839' }} />
                  </p>
                  <p
                    style={{
                      marginLeft: '8px',
                      fontSize: window.innerWidth < 992 ? '16px' : '20px',
                      fontWeight: 'bold'
                    }}
                  >
                    SĐT: {restaurant.phone_number} <BsTelephoneFill style={{ scale: '80%', color: '#cc3333' }} />
                    {' --- '}
                    Vị trí: {restaurant.location} <FaLocationDot style={{ scale: '80%', color: '#cc3333' }} />
                  </p>
                </div>
                <div className='restaurant-image' key={restaurant.id}>
                  <img
                    src={restaurant.avatar ? restaurant.avatar : './src/assets/Images/LandingPage/background_1.jpg'}
                    alt={
                      restaurant.avatar
                        ? `Rất tiếc, không thể tải ảnh nhà hàng ${restaurant.name} :((`
                        : restaurant.name
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className='alert alert-danger'
            role='alert'
            style={{ marginTop: '25px', fontSize: window.innerWidth < 992 ? '16px' : '20px', fontWeight: 'bold' }}
          >
            No matching restaurants
          </div>
        )}
        <div>
          <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}

export default Restaurants
