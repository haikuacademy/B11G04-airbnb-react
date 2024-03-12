import { Link } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'
axios.defaults.withCredentials = true

function Signup() {
  const [validEmail, setValidEmail] = useState(true)

  const validateEmail = (email) => {
    if ((email.includes('@') && email.includes('.')) || email === '') {
      console.log(email)
      setValidEmail(true)
    } else {
      console.log('not valid')
      setValidEmail(false)
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    let form = new FormData(e.target)

    let formObject = Object.fromEntries(form.entries())

    let apiResponse = await axios.post(
      'https://haiku-bnb.onrender.com/signup',
      formObject
    )

    return apiResponse.data
  }

  return (
    <form
      onSubmit={(e) => submitForm(e)}
      className="container mx-auto flex flex-col p-6 border-2 w-[320px] mt-[60px] rounded"
    >
      <img
        src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
        alt="airbnb logo"
        className="h-6 self-center"
      />
      <label className="mt-2">First Name</label>
      <input
        name="first_name"
        type="text"
        className="rounded px-3.25 py-2.75 border-2 p-1"
      />
      <label className="mt-2">Last Name</label>
      <input
        name="last_name"
        type="text"
        className="rounded px-3.25 py-2.75 border-2 p-1"
      />
      <label className="mt-2">
        Email{' '}
        {!validEmail ? <span className="text-red-500">Invalid Email</span> : ''}
      </label>

      <input
        name="email"
        type="email"
        className="rounded px-3.25 py-2.75 border-2 p-1"
        onChange={(e) => {
          validateEmail(e.target.value)
        }}
      />
      <label className="mt-2">Password</label>
      <input
        name="password"
        type="password"
        className="rounded px-3.25 py-2.75 border-2 p-1"
      />
      <label className="mt-2">Profile Picture</label>
      <input
        name="picture"
        type="url"
        className="rounded px-3.25 py-2.75 border-2 p-1"
        placeholder="https://..."
      />
      <button className="rounded py-2 mt-6 bg-pink-500 text-white ">
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
