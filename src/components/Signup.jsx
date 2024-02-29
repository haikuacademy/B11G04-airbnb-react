import { Link } from 'react-router-dom'

function Signup() {
  return (
    <form className="container mx-auto flex flex-col p-8 border-2 rounded">
      <img
        src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
        alt="airbnb logo"
        className="w-32"
      />
      <label>First Name</label>
      <input type="text" className="border-2 p-1" />
      <label>Last Name</label>
      <input type="text" className="border-2 p-1" />
      <label>Email</label>
      <input type="email" className="border-2 p-1" />
      <label>Password</label>
      <input type="password" className="border-2 p-1" />
      <label>Profile Picture</label>
      <input type="url" className="border-2 p-1" />
      <button className="bg-pink-500 text-white bg-[#FB7185]">Register</button>
      <span>
        Already have an account? <Link to="/login">Login here</Link>
      </span>
    </form>
  )
}

export default Signup
