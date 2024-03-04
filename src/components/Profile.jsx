import Nav from './Nav'

function Profile() {
  const user = {
    firstName: 'Pepe',
    lastName: 'the King Prawn',
    email: 'pepe@prawnholdings.com',
    picture:
      'https://www.generatormix.com/images/muppets/pepe-the-king-prawn.jpg'
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <form className="flex flex-col gap-2 justify-start border-2 rounded p-5 mt-4">
        <h1 className="font-bold text-2xl">Your Profile</h1>
        <div className="flex items-center">
          <img
            src={user.picture}
            alt="User profile pic"
            className="w-20 rounded-full"
          />
          <input
            className="border-2 px-4 py-2 rounded w-full ml-4"
            type="text"
            value={user.picture}
          />
        </div>
        <label>First Name</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          value={user.firstName}
        />
        <label>Last Name</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="text"
          value={user.lastName}
        />
        <label>Email</label>
        <input
          className="border-2 px-4 py-2 p-1 rounded"
          type="email"
          value={user.email}
        />
        <button className="rounded p-3 mt-6 text-white w-32 bg-red-400">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Profile
