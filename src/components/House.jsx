import { useState, useEffect } from 'react'
import axios from 'axios'

import Nav from './Nav'
import Gallery from './Gallery'
import Reviews from './Reviews'
import BookHouse from './Booking'

function House({ id }) {
  const [house, setHouse] = useState(undefined)

  const getHouse = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/houses/1')

    setHouse(data)

    return house
  }

  useEffect(() => {
    getHouse()
  }, [])

  if (house === undefined) {
    return <div> 'loading'</div>
  }

  return (
    <div className="container mx-auto">
      <Nav />
      <Gallery house={house} />

      <div className="grid grid-cols-3 gap-36 pb-10 mx-2">
        <div className="col-span-2">
          {/* <div className=""> */}
          <div className="text-lg font-bold my-4">{house.location}</div>
          <div className="text-sm text-slate-400  my-4">
            {house.rooms} rooms . {house.bathrooms} bathrooms
          </div>
          <div className="flex justify-start  my-4">
            <img src={house.host.picture} className="rounded-full mr-2 h-12" />
            <div>
              <div className="text-sm">Hosted by</div>
              <div className="text-sm">
                <strong>
                  {house.host.firstName} {house.host.lastName}
                </strong>
              </div>
            </div>
          </div>
          <div className="text-sm my-4">
            <p>{house.description}</p>
          </div>
        </div>
        <BookHouse house={house} id={id} />
      </div>
      <Reviews />
    </div>
  )
}
export default House
