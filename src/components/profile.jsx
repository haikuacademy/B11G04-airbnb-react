import Nav from './Nav'

function Profile() {
  return (
    <div className="container mx-auto ">
      <Nav />
      <form className="flex flex-col gap-2 justify-start border-2 rounded p-5 mt-4">
        <h1 className="font-bold text-2xl">Your Profile</h1>
        <div className="flex items-center">
          <img
            src="https://www.generatormix.com/images/muppets/pepe-the-king-prawn.jpg"
            alt="pepe the king prawn"
            className="w-20 rounded-full"
          />
          <input
            className="border-2 px-4 py-2     rounded w-full ml-4"
            type="text"
            value="https://www.generatormix.com/images/muppets/pepe-the-king-prawn.jpg"
          />
        </div>
        <label>First Name</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          value="Pepe"
        />
        <label>Last Name</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          value="the king prawn"
        />
        <label>Email</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="email"
          value="pepe@prawnholdings.com"
        />
        <button className="rounded p-3 mt-6  text-white w-32 bg-red-400">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Profile
