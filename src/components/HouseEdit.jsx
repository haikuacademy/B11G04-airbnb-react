import Nav from './Nav'

function HouseEdit() {
  return (
    <>
      <Nav />
      <div className="container mx-auto border rounded">
        <form>
          <h5 className="m-4">Edit your Listing</h5>
          <div className="m-3 grid grid-cols-2">
            <div className="flex flex-col">
              <label className="block text-xs text-slate-400 m-1">
                Location
              </label>
              <select className="border rounded text-sm bg-white m-1">
                <option selected>Bali</option>
                <option>Koh Phangan</option>
                <option>Phuket</option>
              </select>
              <label className="block text-xs text-slate-400  m-1">
                Bedrooms
              </label>
              <input
                type="number"
                value="3"
                className="border rounded text-sm m-1"
              />
              <label className="block text-xs text-slate-400 m-1">
                Bathrooms
              </label>
              <input
                type="number"
                value="2"
                className="border rounded text-sm m-1"
              />
              <label className="block text-xs text-slate-400 m-1">
                Price per Night
              </label>
              <input
                type="number"
                value="140"
                className="border rounded text-sm m-1"
              />
              <label className="block text-xs text-slate-400 m-1">
                Description
              </label>
              <textarea className="border rounded text-sm m-1" rows="4">
                This enchanting Airbnb villa in Bali offers an exquisite blend
                of traditional Balinese architecture and modern luxury. Tucked
                away in lush tropical greenery, the villa features a stunning
                open-air living space that allows the gentle Balinese breeze to
                flow through, creating a tranquil and refreshing ambiance.
              </textarea>
            </div>
            <div className="flex flex-col">
              <label className="block text-xs text-slate-400 m-1">Photos</label>
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/01.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/02.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/03.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/04.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/05.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/06.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/07.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/08.png"
                className="border rounded text-sm m-1"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/09.png"
                className="border rounded text-sm m-1"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <button className="bg-[#fb7185] text-sm text-white px-3 py-2 mt-4 ml-3 mr-2 mb-4 rounded w-fit">
              Save changes
            </button>
            <button className="border bg-white text-sm text-black px-3 py-2 mt-4 mb-4 rounded w-fit">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default HouseEdit
