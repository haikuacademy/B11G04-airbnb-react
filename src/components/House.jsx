import Nav from './Nav'
import Gallery from './Gallery'
import Reviews from './Reviews'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Gallery />

      <div className="grid grid-cols-3 gap-36">
        <div className="col-span-2">
          {/* <div className=""> */}
          <div className="text-lg font-bold">Phuket, Thailand</div>
          <div className="text-sm text-slate-400">2 rooms . 2 bathrooms</div>
        </div>
        <div className="border p-1 x-20 border-gray-300">
          <div className="text-sm">
            <strong>$120</strong>/night
            {/* </div> */}
            <div className="flex justify-between">
              <div className="text-sm">
                3 nights = <strong>$360</strong>
              </div>
              <div className="text-sm bg-blue-500">4.2</div>
            </div>
          </div>
        </div>

        <div className="flex justify start">
          <div className="text-sm">3.1</div>
          <div className="">
            <div className="text-sm">Hosted by</div>
            <div className="text-sm">
              <strong>Linda Smith</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm mt-4 w-2/3">
        <p>
          Nestled gracefully against the azure embrace of the ocean, the
          beautiful house exudes timeless charm and tranquility. Its weathered
          cedar exterior echoes the hues of the surrounding sand and sky,
          blending seamlessly with the coastal landscape. Large windows adorn
          its façade, inviting the golden sunlight to dance within its airy
          confines. A spacious deck overlooks the endless expanse of turquoise
          waters, offering panoramic views of rolling waves and distant
          horizons. Inside, the interiors are bathed in natural light, adorned
          with rustic furnishings and nautical accents that evoke a sense of
          seaside serenity. This coastal haven whispers tales of peace and
          rejuvenation.
        </p>
      </div>

      <Reviews />
    </div>
  )
}

export default House
