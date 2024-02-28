function HouseCard() {
  return (
    <div className="p-2 border rounded">
      <h6 className="text-lg font-bold">Phuket, Thailand</h6>
      <span className="text-sm text-slate-400">2 rooms · 2 bathrooms</span>
      <h5 className="text-lg font-bold">$120</h5>
      <div className="flex justify-between">
        <div>4.5</div>
        <div>34</div>
      </div>
    </div>
  )
}
export default HouseCard
