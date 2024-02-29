import { Link } from 'react-router-dom'

function Signup() {
  return (
    <form className="container mx-auto flex flex-col p-6 border-2 w-[320px] mt-[60px] rounded">
      <img
        src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
        alt="airbnb logo"
        className="h-6 self-center"
      />
      <label className="mt-2">First Name</label>
      <input type="text" className="rounded px-3.25 py-2.75 border-2 p-1" />
      <label className="mt-2">Last Name</label>
      <input type="text" className="rounded px-3.25 py-2.75 border-2 p-1" />
      <label className="mt-2">Email</label>
      <input type="email" className="rounded px-3.25 py-2.75 border-2 p-1" />
      <label className="mt-2">Password</label>
      <input type="password" className="rounded px-3.25 py-2.75 border-2 p-1" />
      <label className="mt-2">Profile Picture</label>
      <input
        type="url"
        className="rounded px-3.25 py-2.75 border-2 p-1"
        placeholder="https://..."
      />
      <button className="rounded py-2 mt-6 bg-pink-500 text-white bg-[#FB7185]">
        Register
      </button>
      <span className="mt-2 text-base">
        Already have an account?
        <Link to="/login" className=" text-[#FB7185] underline">
          Login here
        </Link>
      </span>
    </form>
  )
}

export default Signup
