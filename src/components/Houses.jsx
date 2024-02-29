import Nav from './Nav'
import HouseCard from './HouseCard'

import Filters from './Filters'

function Houses() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Filters />
      <div className="grid grid-cols-5 gap-4 ">
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

export default Houses
