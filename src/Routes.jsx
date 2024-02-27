import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'
import House from './components/House'


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router