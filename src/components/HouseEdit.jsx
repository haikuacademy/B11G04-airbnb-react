import Nav from './Nav'
import { Link } from 'react-router-dom'

//House Edit
// Copy the house object from the House.jsx component to HouseEdit.jsx
// Use the object data to replace the hardcoded values in the UI

function HouseEdit() {
  let house = {
    location: 'Bali, Indonesia',
    rooms: 2,
    bathrooms: 2,
    description:
      ' Nestled gracefully against the azure embrace of the ocean, the beautiful house exudes timeless charm and tranquility. Its weathered cedar exterior echoes the hues of the surrounding sand and sky, blending seamlessly with the coastal landscape. Large windows adorn its façade, inviting the golden sunlight to dance within its airy confines. A spacious deck overlooks the endless expanse of turquoise waters, offering panoramic views of rolling waves and distant horizons. Inside, the interiors are bathed in natural light, adorned with rustic furnishings and nautical accents that evoke a sense of seaside serenity. This coastal haven whispers tales of peace and rejuvenation.',
    price: 300,
    rating: 4,
    host: {
      firstName: 'Linda',
      lastName: 'Smith',
      picture: 'https://randomuser.me/api/portraits/women/85.jpg'
    }
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
