import Nav from './Nav'
import HouseCard from './HouseCard'

function EditListing() {
  return (
    <form className="p-4 mx-2 border-2 rounded">
      <h1 className="my-1 text-2xl">List a house</h1>
      <div className="grid grid-cols-2">
        <div className=" mr-28">
          <div className="flex flex-col my-1">
            <label>Location</label>
            <input className="border-2 rounded p-2" type="text" value="Bali" />
          </div>
          <div className="flex flex-col my-1">
            <label>Bedrooms</label>
            <input className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Bathrooms</label>
            <input className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Price per Night</label>
            <input className="border-2 rounded p-2" type="text" />
          </div>
          <div className="flex flex-col my-1">
            <label>Description</label>
            <textarea className="border-2 rounded p-2" rows="6"></textarea>
          </div>
          <button className="rounded p-3 mt-6 text-white w-32 bg-red-400">
            List House
          </button>
        </div>
        <div className="flex flex-col">
          <div className="px-1">Photos</div>
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
          <input type="url" className="border-2 rounded p-2 my-1" />
        </div>
      </div>
    </form>
  )
}

>>>>>>> Stashed changes
function Listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-20 ">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}

export default Listings
