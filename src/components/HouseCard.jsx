import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'
import { comment } from 'postcss'
import { Link } from 'react-router-dom'

function HouseCard({ booking }) {
  return (
    <div className=" border rounded hover:shadow">
      <Link to="/houses/1">
        <img src={booking.location} className="border rounded" alt="" />
        <h6 className="text-lg font-bold">{booking.location}</h6>
        <span className="text-sm text-slate-400">
          {booking.rooms} rooms · {booking.bathrooms} bathrooms
        </span>
        <h5 className="text-lg font-bold">${booking.price}</h5>
        <div className="flex justify-between">
          <div>
            <span>
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStarHalf} />
            </span>
          </div>
          <div>
            {booking.reviews}
            <FontAwesomeIcon
              className="text-transoarent"
              icon={faCommentDots}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}
export default HouseCard
