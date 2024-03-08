import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Filters() {
  const [locations, setLocations] = useState([])
  const getLocations = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/locations')
    console.log(locations)
    setLocations(data)
  }
  useEffect(() => {
    getLocations(locations)
  }, [])
  return (
    <form>
      <div className="flex justify-between bg-slate-100 p-2 my-2 gap-2">
        {/* Location */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          <select className="bg-white text-sm text-black font-semibold flex-1">
            <option selected value="">
              Any Location
            </option>
            {locations.map((location, index) => (
              <option key={index}>{location}</option>
            ))}
          </select>
        </div>
        {/* Rooms */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faBed} className="mr-2" />
          <select className="bg-white text-sm text-black font-semibold flex-1">
            <option selected>Any Rooms</option>
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
          </select>
        </div>
        {/* Max Price */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
          <input type="number" placeholder="max price" className="flex-1" />
        </div>
        {/* Sort By */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faSort} className="mr-2" />
          <select className="bg-white text-sm text-black font-semibold flex-1">
            <option selected>sort by</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
            <option>Rating (low to high)</option>
            <option>Rating (high to low)</option>
          </select>
        </div>
        {/* Keywords */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="keywords..."
            className="bg-white text-sm font-semibold px-2 py-3 border rounded w-full"
          />
        </div>
        <button className="bg-[#fb7185] text-sm text-white font-semibold px-3 py-2 rounded">
          Search
        </button>
      </div>
    </form>
  )
}
export default Filters
