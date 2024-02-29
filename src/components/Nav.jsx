function Nav() {
  return (
    <div className="flex justify-between">
      <div>
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
          alt="Airbnb logo"
          className="h-7 mt-3 mb-1"
        />
      </div>
      <div className="flex mt-3 mb-1 gap-1">
        <div className="inline border rounded text-sm px-2 py-1">
          My Bookings
        </div>
        <div className="inline border rounded text-sm px-2 py-1">
          My Listings
        </div>
        <div className="inline border rounded text-sm px-2 py-1">Profile</div>
      </div>
    </div>
  )
}

export default Nav
