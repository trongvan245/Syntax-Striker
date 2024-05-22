import { useState, useEffect } from 'react'

const restaurants = [
  {
    name: 'Pizza Restaurant',
    price: '200-550$',
    rating: 4.9,
    tel: '0909123456',
    location: 'District 5'
  },
  {
    name: 'Domino Restaurant',
    price: '190-600$',
    rating: 4.0,
    tel: '0909123456',
    location: 'District 5'
  }
  // ... other restaurants
]

function Restaurants() {
  const [searchText, setSearchText] = useState('')
  const [sort, setSort] = useState('')
  const [location, setLocation] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  useEffect(() => {
    const filtered = restaurants.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (!location || restaurant.location === location)
      )
    })
    setFilteredRestaurants(filtered)
  }, [searchText, location])

  const handleSortChange = (event) => {
    setSort(event.target.value)
    const sorted = [...filteredRestaurants]
    if (event.target.value === 'best-rating') {
      sorted.sort((a, b) => b.rating - a.rating)
    } else if (event.target.value === 'cheapest') {
      const prices = sorted.map((restaurant) => {
        const priceRange = restaurant.price.split('-')
        return parseInt(priceRange[0], 10)
      })
      sorted.sort((a, b) => prices[a.name] - prices[b.name])
    } else if (event.target.value === 'most-expensive') {
      const prices = sorted.map((restaurant) => {
        const priceRange = restaurant.price.split('-')
        return parseInt(priceRange[1], 10)
      })
      sorted.sort((a, b) => prices[b.name] - prices[a.name])
    }
    setFilteredRestaurants(sorted)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  return (
    <div className='restaurants'>
      <div className='search'>
        <input
          type='text'
          placeholder='Search restaurants'
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <div className='sort'>
        <select value={sort} onChange={handleSortChange}>
          <option value=''>Sort</option>
          <option value='best-rating'>Best Rating</option>
          <option value='cheapest'>Cheapest</option>
          <option value='most-expensive'>Most Expensive</option>
        </select>
      </div>
      <div className='location'>
        <select value={location} onChange={handleLocationChange}>
          <option value=''>Location</option>
          <option value='District 5'>District 5</option>
          {/* ... other locations */}
        </select>
      </div>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.name}>
            <h2>{restaurant.name}</h2>
            <p>Price: {restaurant.price}</p>
            <p>Rating: {restaurant.rating} stars</p>
            <p>Tel: {restaurant.tel}</p>
            <p>Location: {restaurant.location}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Restaurants
