import Nav from './Nav'
import HouseCard from './HouseCard'
import { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

function EditListing({ error, createHouse }) {
  return (
    <form
      onSubmit={(e) => createHouse(e)}
      className="p-4 mx-2 border-2 rounded"
    >
      <h1 className="my-1 text-2xl">List a house</h1>
      <div className="grid grid-cols-2">
        <div className=" mr-28">
          <div className="flex flex-col my-1">
            <label>Location</label>
            <input
              name="location"
              className="border-2 rounded p-2"
              type="text"
              value="Bali"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>Bedrooms</label>
            <input name="rooms" className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Bathrooms</label>
            <input
              name="bathrooms"
              className="border-2 rounded p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>Price per Night</label>
            <input name="price" className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Description</label>
            <textarea
              name="description"
              className="border-2 rounded p-2"
              rows="6"
            ></textarea>
          </div>
          <div className=" mt-6">
            <button className="rounded  py-2  px-3 mr-2 text-white  bg-red-400">
              List House
            </button>
            <span className="text-red-500 text-xs">{error}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-1">Photos</div>
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
          <input
            name="photos"
            type="url"
            className="border-2 rounded p-2 my-1"
          />
        </div>
      </div>
    </form>
  )
}

function Listings() {
  const [error, setError] = useState('')
  const [listings, setListings] = useState([])
  async function createHouse(e) {
    e.preventDefault()
    let form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    formObject.photos = form.getAll('photos')
    console.log(formObject)
    const apiResponse = await axios.post(
      'https://haiku-bnb.onrender.com/houses',
      {
        location: formObject.location,
        rooms: formObject.rooms,
        bathrooms: formObject.bathrooms,
        description: formObject.description,
        price: formObject.price,
        photos: formObject.photos
      }
    )
    if (apiResponse.data.error) {
      setError(apiResponse.data.error)
    } else {
      listings = apiResponse.data
      console.log(listings)
      setListings(listings)
    }
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <EditListing />
      <div className="grid grid-cols-5 gap-4 mx-2">
        {listings.map((house, id) => (
          <HouseCard house={house} listing={true} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Listings
