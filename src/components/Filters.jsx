import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Filters({ setHouses }) {
  const [locations, setLocations] = useState([])
  const getLocations = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/locations')
    setLocations(data)
  }
  useEffect(() => {
    getLocations(locations)
  }, [])

  const getFilteredHouses = async (obj) => {
    const paramsObject = {}
    if (obj.location) {
      paramsObject.location = obj.location
    }
    if (obj.min_rooms) {
      paramsObject.min_rooms = obj.min_rooms
    }
    if (obj.max_price) {
      paramsObject.max_price = obj.max_price
    }
    if (obj.sort) {
      paramsObject.sort = obj.sort
    }
    if (obj.search) {
      paramsObject.searc = obj.search
    }
    let apiResponse = await axios.get('https://haiku-bnb.onrender.com/houses', {
      params: {
        location: obj.location,
        min_rooms: obj.min_rooms,
        max_price: obj.max_price,
        sort: obj.sort,
        search: obj.search
      }
    })
    return apiResponse.data
  }

  let filteredHouses
  async function submitForm(e) {
    e.preventDefault()
    let form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    filteredHouses = await getFilteredHouses(formObject)
    // console.log(filteredHouses)
    setHouses(filteredHouses)
  }

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="flex justify-between bg-slate-100 p-2 my-2 gap-2">
        {/* Location */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          <select
            name="location"
            className="bg-white text-sm text-black font-semibold flex-1"
          >
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
          <select
            name="min_rooms"
            className="bg-white text-sm text-black font-semibold flex-1"
          >
            <option selected value="">
              Any Rooms
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        {/* Max Price */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
          <input
            name="max_price"
            type="number"
            placeholder="max price"
            className="flex-1"
          />
        </div>
        {/* Sort By */}
        <div className="flex flex-1 bg-white px-2 py-2 border rounded items-center">
          <FontAwesomeIcon icon={faSort} className="mr-2" />
          <select
            name="sort"
            className="bg-white text-sm text-black font-semibold flex-1"
          >
            <option selected value="">
              sort by
            </option>
            <option value="price">Price: low to high</option>
            <option value="rooms">Rooms: high to low</option>
          </select>
        </div>
        {/* Keywords */}
        <div className="flex-1">
          <input
            name="search"
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
