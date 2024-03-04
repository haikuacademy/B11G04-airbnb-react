import Nav from './Nav'
import HouseCard from './HouseCard'

function EditListing() {
  return (
    <form className="p-4 mx-2 border-2 rounded">
      <h1 className="my-1 text-2xl">List a house</h1>
      <div className="grid grid-cols-2">
        <div className=" mr-28">
          <div className="flex flex-col my-1">
            <label>Location</label>
            <input className="border-2 rounded p-2" type="text" value="Bali" />
          </div>
          <div className="flex flex-col my-1">
            <label>Bedrooms</label>
            <input className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Bathrooms</label>
            <input className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Price per Night</label>
            <input className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Description</label>
            <textarea className="border-2 rounded p-2" rows="6"></textarea>
          </div>
          <div className=" mt-6">
            <button className="rounded  py-2  px-3 mr-2 text-white  bg-red-400">
              List House
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-1">Photos</div>
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
        </div>
      </div>
    </form>
  )
}

function Listings() {
  let listings = [
    {
      location: 'Phuket, Thailand',
      rooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 4,
      reviews: 34,
      listing: true,
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
      listing: true,
      photo:
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      location: 'Bali, Indonesia',
      rooms: 4,
      bathrooms: 3,
      price: 250,
      rating: 4.5,
      reviews: 50,
      listing: true,
      photo:
        'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  return (
    <div className="container mx-auto">
      <Nav />
      <EditListing />
      <div className="grid grid-cols-5 gap-4 mx-2">
        {listings.map((house, id) => (
          <HouseCard house={house} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Listings
