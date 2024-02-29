function Filters() {
  return (
    <form>
      <div className="flex justify-between bg-slate-100 p-2 my-2 gap-2">
        <div className="flex-1">
          {/* Location */}
          <select className="bg-white text-sm text-black font-semibold px-2 py-2 border rounded w-full">
            <option selected>Any Location</option>
            <option>Bali</option>
            <option>Koh Phangan</option>
            <option>Phuket</option>
          </select>
        </div>
        <div className="flex-1">
          {/* Rooms */}
          <select className="bg-white text-sm text-black font-semibold px-2 py-2 border rounded w-full">
            <option selected>Any Rooms</option>
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
          </select>
        </div>
        <div className="flex-1">
          {/* Max Price */}
          <input
            type="number"
            placeholder="max price"
            className="bg-white text-sm font-semibold px-2 py-2 border rounded w-full"
          />
        </div>
        <div className="flex-1">
          {/* Sort By */}
          <select className="bg-white text-sm text-black font-semibold px-2 py-2 border rounded w-full">
            <option selected>sort by</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
            <option>Rating (low to high)</option>
            <option>Rating (high to low)</option>
          </select>
        </div>
        <div className="flex-1">
          {/* Keywords */}
          <input
            type="text"
            placeholder="keywords..."
            className="bg-white text-sm font-semibold px-2 py-2 border rounded w-full"
          />
        </div>
        <button className="bg-[#fb7185] text-sm text-white font-semibold px-3 py-2 rounded">
          Search
        </button>
      </div>
    </form>
  )
}
export default Filters
