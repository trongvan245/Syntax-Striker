import { useParams } from 'react-router-dom'
import menuData from './menuData.json'

const RestaurantMenuPage = () => {
  const { id } = useParams()
  const restaurant = Object.keys(menuData).find((key) => key === id)
  const menuItems = restaurant ? menuData[restaurant].food_items : []

  console.log(id)

  return (
    <div>
      <h1>Menu for {restaurant}</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.pricing} - Rating: {item.rating}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenuPage
