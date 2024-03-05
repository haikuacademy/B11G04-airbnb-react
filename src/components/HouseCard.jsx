import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'
import { comment } from 'postcss'
import { Link } from 'react-router-dom'

function BookingComponent({ booking }) {
  // let startDate = booking.startDate.toLocaleDateString('en-us', {
  //   day: 'numeric',
  //   year: 'numeric',
  //   month: 'short'
  // })
  // let endDate = booking.endDate.toLocaleDateString('en-us', {
  //   day: 'numeric',
  //   year: 'numeric',
  //   month: 'short'
  // })

  // let totalTime = booking.endDate.getTime() - booking.startDate.getTime()

  // let totalDays = Math.round(totalTime / (1000 * 3600 * 24))

  return (
    <div className="flex flex-col items-center m-3 p-2 bg-green-200">
      <span>
        {booking.startDate} - {booking.endDate}
      </span>
      {/* <span className="font-bold  text-lg">
        {totalDays} nights = ${price * totalDays}
      </span> */}
    </div>
  )
}

function HouseCard({ house, listing }) {
  return (
    <div className=" border rounded hover:shadow">
      <Link to="/houses/1">
        <img src={house.photo} className="border rounded" alt="" />
        <h6 className="text-lg font-bold">{house.location}</h6>
        <span className="text-sm text-slate-400">
          {house.rooms} rooms · {house.bathrooms} bathrooms
        </span>
        <h5 className="text-lg font-bold">${house.price}</h5>
        <div className="flex justify-between">
          <div>
            <span>
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStarHalf} />
            </span>
            {house.rating}
          </div>
          <div>
            {house.reviews}
            <FontAwesomeIcon
              className="text-transoarent"
              icon={faCommentDots}
            />
          </div>
        </div>
        {house.booking ? (
          <BookingComponent booking={house.booking} price={house.price} />
        ) : (
          ''
        )}
      </Link>
      {listing ? (
        <span>
          <button className="px-2 py-1 border-2 rounded  mr-1">View</button>
          <button className="px-2 py-1 border-2 rounded">Edit</button>
        </span>
      ) : (
        ''
      )}
    </div>
  )
}
export default HouseCard
