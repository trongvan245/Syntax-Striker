import { BsTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { PiCurrencyDollarSimpleFill } from 'react-icons/pi'

import { useState } from 'react'
import './Restaurants.scss'
import Rating from './Rating'
import Pagination from './Pagination'

const restaurants = [
  {
    name: 'Pizza Restaurant 1',
    price: '150-600',
    rating: 4.9,
    tel: '0909123456',
    location: 'District 3'
  },
  {
    name: 'Domino Restaurant 1',
    price: '190-600',
    rating: 4.2,
    tel: '0909123456',
    location: 'District 3'
  },
  {
    name: 'Domino Restaurant 2',
    price: '190-600',
    rating: 4.3,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant 3',
    price: '190-600',
    rating: 4.0,
    tel: '0909123456',
    location: 'District 4'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 3.0,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 2.0,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 3.0,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 3.0,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 2.0,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 4.2,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 1.3,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 4.9,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600',
    rating: 3.6,
    tel: '0909123456',
    location: 'District 5'
  }
  // ... other restaurants
]

function Restaurants() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('Best Rating')
  const [locationOption, setLocationOption] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSortChange = (event) => {
    setSortOption(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocationOption(event.target.value)
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
      return b.price - a.price
    } else if (sortOption === 'Cheapest') {
      return a.price - b.price
    }
    return 0
  })

  const locationRestaurants = sortedRestaurants.filter((restaurant) =>
    locationOption === 'All' ? true : restaurant.location === locationOption
  )

  const paginatedRestaurants = locationRestaurants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const totalPages = Math.ceil(locationRestaurants.length / itemsPerPage)

  return (
    <div className='restaurants-container'>
      <input type='text' placeholder='Search by name' value={searchTerm} onChange={handleSearchChange} />
      <select value={sortOption} onChange={handleSortChange}>
        <option value='Best Rating'>Best Rating</option>
        <option value='Most Expensive'>Most Expensive</option>
        <option value='Cheapest'>Cheapest</option>
      </select>
      <select value={locationOption} onChange={handleLocationChange}>
        <option value='All'>All Locations</option>
        <option value='District 1'>District 1</option>
        <option value='District 2'>District 2</option>
        <option value='District 3'>District 3</option>
        <option value='District 4'>District 4</option>
        <option value='District 5'>District 5</option>
      </select>
      <div className='restaurants-grid'>
        {paginatedRestaurants.map((restaurant) => (
          <div className='restaurant-box' key={restaurant.id}>
            <h2 style={{ fontWeight: 'bold', color: '#cc3333' }}>{restaurant.name}</h2>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              <Rating rating={restaurant.rating} style={{ display: 'inline' }} />
            </p>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {' '}
              Price: {restaurant.price} <PiCurrencyDollarSimpleFill style={{ scale: '120%', color: '#008839' }} />
            </p>
            <p style={{ fontWeight: 'bold' }}>
              Tel: {restaurant.tel} <BsTelephoneFill style={{ scale: '80%', color: '#cc3333' }} />
              {' --- '}
              Location: {restaurant.location} <FaLocationDot style={{ scale: '80%', color: '#cc3333' }} />
            </p>
          </div>
        ))}
      </div>
      <div>
        <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default Restaurants
