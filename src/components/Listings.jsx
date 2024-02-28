import Nav from './Nav'
import HouseCard from './HouseCard'

function Listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-20 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div className="bg-pink-600">2</div>
      </div>
      <div className="grid grid-cols-5 gap-4 bg-pink-200">
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
