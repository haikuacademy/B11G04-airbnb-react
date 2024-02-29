import Nav from './Nav'

function Profile() {
  return (
    <div className="container mx-auto max-w-[1535px]">
      <Nav />
      <form className="flex flex-col gap-2 justify-start border-2 rounded p-5 mt-4">
        <h1 className="font-bold text-2xl">Your Profile</h1>
        <div className="flex">
          <img
            src="https://www.generatormix.com/images/muppets/pepe-the-king-prawn.jpg"
            alt="pepe the king prawn"
            className="w-20 rounded-full p-2"
          />
          <input
            className="border-2 px-4 py-2 p-1 rounded w-full"
            type="text"
            placeholder="https://www.generatormix.com/images/muppets/pepe-the-king-prawn.jpg"
          />
        </div>
        <label>First Name</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          placeholder="Pepe"
        />
        <label>Last Name</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          placeholder="the king prawn"
        />
        <label>Email</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="email"
          placeholder="pepe@prawnholdings.com"
        />
        <button className="rounded p-3 mt-6 bg-pink-500 text-white w-32 bg-[#FB7185]">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Profile
