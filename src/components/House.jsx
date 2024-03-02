import Nav from './Nav'
import Gallery from './Gallery'
import Reviews from './Reviews'

function BookHouse() {
  return (
    <form className="border-2 p-4 x-20 border-gray-300 rounded">
      <div className="pb-1 text-lg">
        <strong className="text-lg">$120</strong>/night
        <div className="flex">
          <div className="flex flex-col">
            <label>Check-in</label>
            <input className="border-2 p-2 my-2 mr-2 rounded" type="date" />
          </div>
          <div className="flex flex-col">
            <label>Check-out</label>
            <input className="border-2 p-2 my-2 rounded" type="date" />
          </div>
        </div>
        <textarea
          className="border-2 w-full p-2"
          cols="30"
          rows="6"
          placeholder="Please send a message to the host..."
        ></textarea>
        <div className="flex justify-between">
          <div className="text-lg">
            3 nights = <strong>$360</strong>
          </div>
          <button className="rounded p-2  text-white bg-red-400">
            Reserve
          </button>
        </div>
      </div>
    </form>
  )
}

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Gallery />

      <div className="grid grid-cols-3 gap-36 pb-10 mx-2">
        <div className="col-span-2">
          {/* <div className=""> */}
          <div className="text-lg font-bold my-4">Phuket, Thailand</div>
          <div className="text-sm text-slate-400  my-4">
            2 rooms . 2 bathrooms
          </div>
          <div className="flex justify-start  my-4">
            <img
              src="https://randomuser.me/api/portraits/women/85.jpg
"
              className="rounded-full mr-2 h-12"
              alt="Linda Smith"
            />
            <div>
              <div className="text-sm">Hosted by</div>
              <div className="text-sm">
                <strong>Linda Smith</strong>
              </div>
            </div>
          </div>
          <div className="text-sm my-4">
            <p>
              Nestled gracefully against the azure embrace of the ocean, the
              beautiful house exudes timeless charm and tranquility. Its
              weathered cedar exterior echoes the hues of the surrounding sand
              and sky, blending seamlessly with the coastal landscape. Large
              windows adorn its façade, inviting the golden sunlight to dance
              within its airy confines. A spacious deck overlooks the endless
              expanse of turquoise waters, offering panoramic views of rolling
              waves and distant horizons. Inside, the interiors are bathed in
              natural light, adorned with rustic furnishings and nautical
              accents that evoke a sense of seaside serenity. This coastal haven
              whispers tales of peace and rejuvenation.
            </p>
          </div>
        </div>
        <BookHouse />
      </div>
      <Reviews />
    </div>
  )
}

export default House
