import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import House from './components/House'
import HouseEdit from './components/HouseEdit'
import Login from './components/Login'
import Signup from './components/Signup'
import Bookings from './components/Bookings'
import Profile from './components/Profile'
import Listings from './components/Listings'
import Reviews from './components/Reviews'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route path="/houses/:id" element={<House />} />
        <Route path="/houses/:id/edit" element={<HouseEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
