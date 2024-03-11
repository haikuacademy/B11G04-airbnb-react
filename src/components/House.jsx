import { useState, useEffect } from 'react'

import Nav from './Nav'
import Gallery from './Gallery'
import Reviews from './Reviews'
import BookHouse from './Booking'

function House() {
  let house = {
    location: 'Phuket, Thailand',
    rooms: 2,
    bathrooms: 2,
    description:
      ' Nestled gracefully against the azure embrace of the ocean, the beautiful house exudes timeless charm and tranquility. Its weathered cedar exterior echoes the hues of the surrounding sand and sky, blending seamlessly with the coastal landscape. Large windows adorn its façade, inviting the golden sunlight to dance within its airy confines. A spacious deck overlooks the endless expanse of turquoise waters, offering panoramic views of rolling waves and distant horizons. Inside, the interiors are bathed in natural light, adorned with rustic furnishings and nautical accents that evoke a sense of seaside serenity. This coastal haven whispers tales of peace and rejuvenation.',
    price: 300,
    rating: 4,
    host: {
      firstName: 'Linda',
      lastName: 'Smith',
      picture: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    images: [
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
    ]
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
        <BookHouse house={house} />
      </div>
      <Reviews />
    </div>
  )
}

export default House
