import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  let bookings = [
    {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 4,
      reviews: 34,
      photo:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      booking: {
        startDate: new Date(2024, 8, 22),
        endDate: new Date(2024, 9, 3)
      }
    },
    {
      location: 'Maldives, India',
      rooms: 3,
      bathrooms: 2,
      price: 200,
      rating: 5,
      reviews: 45,
      photo:
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      booking: {
        startDate: new Date(2024, 3, 4),
        endDate: new Date(2024, 3, 9)
      }
    },
    {
      location: 'Bali, Indonesia',
      rooms: 4,
      bathrooms: 3,
      price: 250,
      rating: 4.5,
      reviews: 50,
      photo:
        'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      booking: {
        startDate: new Date(2024, 3, 4),
        endDate: new Date(2024, 3, 9)
      }
    }
  ]
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
