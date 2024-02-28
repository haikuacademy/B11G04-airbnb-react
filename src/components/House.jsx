import Nav from './Nav'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-5 bg-pink-200">
        <div className="bg-pink-600">1</div>
        <div className="grid grid-cols-3 gap-2 bg-pink-200">
          <div className="bg-pink-600">1</div>
          <div className="bg-pink-600">2</div>
          <div className="bg-pink-600">3</div>
          <div className="bg-pink-600">4</div>
          <div className="bg-pink-600">5</div>
          <div className="bg-pink-600">6</div>
          <div className="bg-pink-600">7</div>
          <div className="bg-pink-600">8</div>
          <div className="bg-pink-600">9</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-36 bg-pink-200">
        <div className="col-span-2 bg-pink-200">
          <div className="bg-pink-600">3</div>
          <div className="flex gap-1 bg-blue-200">
            <div className="bg-blue-600">3.1</div>
            <div className="bg-blue-600">3.2</div>
          </div>
          <div className="flex gap-1 bg-blue-200">
            <div className="bg-blue-600">5.1</div>
            <div className="bg-blue-600">5.2</div>
          </div>
        </div>
        <div className="bg-pink-200">
          <div className="bg-pink-200">
            <div className="bg-pink-600">4</div>
          </div>
          <div className="flex justify-between bg-blue-200">
            <div className="bg-blue-600">4.1</div>
            <div className="bg-blue-600">4.2</div>
          </div>
          <div className="bg-pink-600">6</div>
        </div>
      </div>
    </div>
  )
}

export default House
