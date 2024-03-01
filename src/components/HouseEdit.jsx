import Nav from './Nav'

function HouseEdit() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <form>
          <h5>Edit your Listing</h5>
          <div className="grid grid-cols-2 gap-20 ">
            <div>
              <label>Location</label>
              <select>
                <option selected>Bali</option>
                <option>Koh Phangan</option>
                <option>Phuket</option>
              </select>
              <label>Bedrooms</label>
              <input type="number" value="3" />
              <label>Bathrooms</label>
              <input type="number" value="2" />
              <label>Price per Night</label>
              <input type="number" value="140" />
              <label>Description</label>
              <textarea rows="4">
                This enchanting Airbnb villa in Bali offers an exquisite blend
                of traditional Balinese architecture and modern luxury. Tucked
                away in lush tropical greenery, the villa features a stunning
                open-air living space that allows the gentle Balinese breeze to
                flow through, creating a tranquil and refreshing ambiance.
              </textarea>
            </div>
            <div>
              <label>Photos</label>
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/01.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/02.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/03.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/04.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/05.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/06.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/07.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/08.png"
              />
              <input
                type="text"
                value="https://www.haikuacademy.com/photos/09.png"
              />
            </div>
            <button>Save changes</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default HouseEdit
