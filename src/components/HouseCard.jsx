import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'
import { comment } from 'postcss'
import { Link } from 'react-router-dom'

function HouseCard() {
  return (
    <div className=" border rounded hover:shadow">
      <Link to="/houses/1">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
"
          className="border rounded"
          alt=""
        />
        <h6 className="text-lg font-bold">Phuket, Thailand</h6>
        <span className="text-sm text-slate-400">2 rooms · 2 bathrooms</span>
        <h5 className="text-lg font-bold">$120</h5>
        <div className="flex justify-between">
          <div>
            <span>
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStarHalf} />
            </span>
            4.5
          </div>
          <div>
            34{' '}
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
