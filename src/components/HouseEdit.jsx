import Nav from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
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
                value="Bali"
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Bedrooms</label>
              <input className="border-2 rounded p-2" type="text" value="3" />
            </div>
            <div className="flex flex-col my-1">
              <label>Bathrooms</label>
              <input className="border-2 rounded p-2" type="text" value="2" />
            </div>
            <div className="flex flex-col my-1">
              <label>Price per Night</label>
              <input className="border-2 rounded p-2" type="text" value="140" />
            </div>
            <div className="flex flex-col my-1">
              <label>Description</label>
              <textarea className="border-2 rounded p-2" rows="6">
                This enchanting Airbnb villa in Bali offers an exquisite blend
                of traditional Balinese architecture and modern luxury. Tucked
                away in lush tropical greenery, the villa features a stunning
                open-air living space that allows the gentle Balinese breeze to
                flow through, creating a tranquil and refreshing ambiance.
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
              value="https://www.haikuacademy.com/photos/01.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/02.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/03.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/04.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/05.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/06.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/07.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/08.png"
            />
            <input
              type="url"
              className="border-2 rounded p-2 my-1"
              value="https://www.haikuacademy.com/photos/09.png"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
export default HouseEdit
