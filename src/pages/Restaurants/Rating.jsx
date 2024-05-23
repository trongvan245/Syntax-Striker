import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons'

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar

  return (
    <div>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />
        ))}
      {halfStar === 1 && <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'gold' }} />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FontAwesomeIcon
            key={fullStars + i + halfStar}
            icon={faStarEmpty}
            style={{
              color: '#b3b3b3'
            }}
          />
        ))}
      {`  (${rating.toFixed(1)})`}
    </div>
  )
}

export default Rating
