import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import { useEffect, useState } from 'react'

import axios from 'axios'

function Profile() {
  const [user, setUser] = useState({})
  const [picture, setPicture] = useState('')
  const navigate = useNavigate()

  const logout = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get('https://haiku-bnb.onrender.com/profile')
      console.log({ data })
      localStorage.removeItem('is LoggedIn ')
      navigate('/login')
    } catch (err) {
      alert(err.message)
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get('https://haiku-bnb.onrender.com/profile')
      if (response.data.error) {
        // navigate('/')
      }
      setUser(response.data)
      setPicture(response.data.picture)
    } catch (e) {
      alert(e.message)
    }
  }

  const modifyUser = async (e) => {
    e.preventDefault()
    // alert('working')
    const form = new FormData(e.target)
    const formObj = Object.fromEntries(form.entries())
    try {
      const { data } = await axios.patch(
        'https://haiku-bnb.onrender.com/profile',
        formObj
      )
      alert('your changes have been saved')
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container mx-auto">
      <Nav />
      <form
        onSubmit={modifyUser}
        className="flex flex-col gap-2 justify-start border-2 rounded p-5 mt-4"
      >
        <h1 className="font-bold text-2xl">Your Profile</h1>
        <div className="flex items-center">
          <img
            src={picture}
            alt="User profile pic"
            className="w-20 rounded-full"
          />
          <input
            name="picture"
            className="border-2 px-4 py-2 rounded w-full ml-4"
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <label>First Name</label>
        <input
          name="first_name"
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          defaultValue={user.first_name}
        />
        <label>Last Name</label>
        <input
          name="last_name"
          defaultValue={user.last_name}
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
        />
        <label>Email</label>
        <input
          name="email"
          className="border-2 px-4 py-2 p-1 rounded"
          type="email"
          defaultValue={user.email}
        />
        <button className="rounded p-3 mt-6 text-white w-32 bg-red-400">
          Save Changes
        </button>
        <button
          onClick={(e) => logout(e)}
          className="rounded p-3 mt-6 text-black w-32 bg-white"
        >
          Logout
        </button>
      </form>
    </div>
  )
}

export default Profile
