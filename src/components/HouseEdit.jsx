import Nav from './Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//House Edit
// Copy the house object from the House.jsx component to HouseEdit.jsx
// Use the object data to replace the hardcoded values in the UI

function HouseEdit() {
  const { id } = useParams()
  const [houseFields, setHouseFields] = useState({})
  const getHouseFields = async () => {
    let { data } = await axios.get(
      `https://haiku-bnb.onrender.com/houses/${id}`
    )
    setHouseFields(data)
    console.log(data)
  }
  useEffect(() => {
    getHouseFields()
    console.log(houseFields)
  }, [])
  let house = {
    location: houseFields.location,
    rooms: houseFields.rooms,
    bathrooms: houseFields.bathrooms,
    description: houseFields.description,
    price: houseFields.price,
    rating: houseFields.rating,
    host: houseFields.host,
    photos: [houseFields.images]
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <form className="p-4 mx-2 border-2 rounded">
        <h1 className="my-1 text-2xl">List a house</h1>
        <div className="grid grid-cols-2">
          <div className="mr-28">
            <div className="flex flex-col my-1">
              <label>Location</label>
              <input
                className="border-2 rounded p-2"
                type="text"
                value={house.location}
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Bedrooms</label>
              <input
                className="border-2 rounded p-2"
                type="text"
                value={house.rooms}
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Bathrooms</label>
              <input
                className="border-2 rounded p-2"
                type="text"
                value={house.bathrooms}
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Price per Night</label>
              <input
                className="border-2 rounded p-2"
                type="text"
                value={house.price}
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Description</label>
              <textarea className="border-2 rounded p-2" rows="6">
                {house.description}
              </textarea>
            </div>
            <div className="mt-6">
              <button className="rounded py-2 px-3 mr-2 text-white bg-red-400">
                List House
              </button>
              <Link
                to="/listings"
                className="rounded py-2 px-3 mt-6 text-black border-2"
              >
                Cancel
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="px-1">Photos</div>
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[0]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[1]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[2]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[3]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[4]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[5]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[6]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[7]}
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value={house.photos[8]}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
export default HouseEdit
