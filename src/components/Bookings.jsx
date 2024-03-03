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
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
    },
    // Adding 5 more houses
    {
      location: 'Maldives, India',
      rooms: 3,
      bathrooms: 2,
      price: 200,
      rating: 5,
      reviews: 45,
      photo: 'https://images.unsplash.com/photo-1589820339934-11a9f5f13b2c'
    },
    {
      location: 'Bali, Indonesia',
      rooms: 4,
      bathrooms: 3,
      price: 250,
      rating: 4.5,
      reviews: 50,
      photo: 'https://images.unsplash.com/photo-1573489901781-7a9b87e1f2d7'
    },
    {
      location: 'Hawaii, USA',
      rooms: 5,
      bathrooms: 4,
      price: 300,
      rating: 4.8,
      reviews: 60,
      photo: 'https://images.unsplash.com/photo-1576657030942-6583e1f20b9a'
    },
    {
      location: 'Miami, USA',
      rooms: 6,
      bathrooms: 5,
      price: 350,
      rating: 4.6,
      reviews: 70,
      photo: 'https://images.unsplash.com/photo-1567411031140-c966c0b331f7'
    },
    {
      location: 'Barcelona, Spain',
      rooms: 7,
      bathrooms: 6,
      price: 400,
      rating: 4.9,
      reviews: 80,
      photo: 'https://images.unsplash.com/photo-1553942954-0c97f5e1c1a9'
    },
    {
      location: 'Paris, France',
      rooms: 8,
      bathrooms: 7,
      price: 450,
      rating: 4.7,
      reviews: 90,
      photo: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb'
    },
    {
      location: 'London, UK',
      rooms: 9,
      bathrooms: 8,
      price: 500,
      rating: 4.5,
      reviews: 100,
      photo: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5'
    },
    {
      location: 'New York, USA',
      rooms: 10,
      bathrooms: 9,
      price: 550,
      rating: 4.8,
      reviews: 110,
      photo: 'https://images.unsplash.com/photo-1585776408971-8a05b88c0708'
    },
    {
      location: 'Tokyo, Japan',
      rooms: 11,
      bathrooms: 10,
      price: 600,
      rating: 4.9,
      reviews: 120,
      photo: 'https://images.unsplash.com/photo-1577769208255-f1c0d5d21572'
    }
  ]
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-5 gap-4">
        {bookings.map((booking, index) => {
          return <HouseCard booking={booking} />
        })}
      </div>
    </div>
  )
}
export default Bookings
