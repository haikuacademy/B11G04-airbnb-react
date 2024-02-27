import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import House from './components/House'
import Login from './components/Login'
import Signup from './components/Signup'
import Listings from './components/Listings'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/listings' element={<Listings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router