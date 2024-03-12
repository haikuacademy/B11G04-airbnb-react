import axios from 'axios'
import Nav from './Nav'
import HouseCard from './HouseCard'
import Filters from './Filters'
import { useState, useEffect } from 'react'

function Houses() {
  const [houses, setHouses] = useState([])
  const getHouses = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/houses')
    setHouses(data)
  }
  useEffect(() => {
    getHouses()
  }, [])
  return (
    <div className="container mx-auto">
      <Nav />
      <Filters setHouses={setHouses} />
      <div className="grid grid-cols-5 gap-4 ">
        {houses.map((house, i) => {
          return <HouseCard key={i} house={house} />
        })}
      </div>
    </div>
  )
}
export default Houses
