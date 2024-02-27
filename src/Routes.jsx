import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Houses from './components/Houses'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Houses />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router