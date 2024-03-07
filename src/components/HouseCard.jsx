import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'
import { comment } from 'postcss'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function BookingComponent({ booking }) {
  return (
    <div className="flex flex-col items-center m-3 p-2 bg-green-200">
      <span>
        {booking.startDate} - {booking.endDate}
      </span>
    </div>
  )
}

function HouseCard({ listing, house }) {
  //   Linking Cards
  // In the HouseCard.jsx component, instead of linking the card to /houses/1, use the house_id value from the props to link the card to its corresponding URL, such as /houses/2, /houses/10, etc.
  //   Test in the browser that clicking a card navigates to its correct URL

  const navigate = useNavigate()

  // const { houseid } = useParams()

  // console.log(houseid)

  // const getLink = async () => {
  //   let { data } = await axios.get(
  //     'https://haiku-bnb.onrender.com/houses/' + { link }
  //   )
  //   setLink(data)
  // }

  // useEffect(() => {
  //   getLink()
  // }, [])

  // if (link === undefined) {
  //   return <div>Loading</div>
  // }

  return (
    <div className=" border rounded hover:shadow">
      <Link to={navigate(`houses/${house.house_id}`)}>
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
