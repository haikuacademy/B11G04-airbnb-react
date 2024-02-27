function House() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between bg-blue-200">
        <div className="bg-blue-600">1</div>
        <div className="bg-blue-600">2</div>
        <div className="bg-blue-600">3</div>
        <div className="bg-blue-600">4</div>
        <div className="bg-blue-600">5</div>
        <div className="bg-blue-600">6</div>
      </div>
      <div className="grid">
        <div className="cols-span-2">
          <div className="bg-pink-600">3</div>
          <div className="flex">
            <div className="bg-blue-600">3.1</div>
            <div className="bg-blue-600">3.2</div>
          </div>
          <div className="flex">
            <bg-blue-600>5.1</bg-blue-600>
            <bg-blue-600>5.2</bg-blue-600>
          </div>
        </div>
        <div className="bg-pink-600">4</div>
        <div className="flex">
          <bg-blue-600>4.1</bg-blue-600>
          <bg-blue-600>4.2</bg-blue-600>
        </div>
        <div className="bg-pink-600">6</div>
      </div>
    </div>
  )
}

export default House
