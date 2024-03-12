import { useState, useEffect } from 'react'
import axios from 'axios'

import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  const [bookings, setBookings] = useState([])

  let getBookings = async () => {
    let apiResponse = await axios.get(`https://haiku-bnb.onrender.com/bookings`)
    setBookings(apiResponse.data)
  }

  useEffect(() => {
    getBookings()
  }, [])

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-5 gap-4">
        {bookings.map((booking, index) => {
          return <HouseCard house={booking} key={index} />
        })}
      </div>
    </div>
  )
}
export default Bookings
