import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            alt="Airbnb logo"
            className="h-7 mt-3 mb-1"
          />
        </Link>
      </div>
      <div className="flex mt-3 mb-1 gap-1">
        <Link
          to="/bookings"
          className="inline border rounded text-sm px-2 py-1"
        >
          My Bookings
        </Link>
        <Link
          to="/listings"
          className="inline border rounded text-sm px-2 py-1"
        >
          My Listings
        </Link>
        <Link to="/profile" className="inline border rounded text-sm px-2 py-1">
          Profile
        </Link>
      </div>
    </div>
  )
}

export default Nav
