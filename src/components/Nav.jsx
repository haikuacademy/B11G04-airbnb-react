import { Link } from 'react-router-dom'

function Nav() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
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
        <Link to="/bookings">
          <div className="inline border rounded text-sm px-2 py-1 hover:border-[#fb7185]">
            My Bookings
          </div>
        </Link>
        <Link to="/listings">
          <div className="inline border rounded text-sm px-2 py-1 hover:border-[#fb7185]">
            My Listings
          </div>
        </Link>
        <Link to="/profile">
          <div className="flex justify-between gap-1 border rounded px-2 py-1 hover:border-[#fb7185]">
            <img
              src="https://randomuser.me/api/portraits/men/84.jpg"
              alt="User profile pic"
              className="rounded-full h-5 w-5 border"
            />
            <span className="text-sm">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Nav
