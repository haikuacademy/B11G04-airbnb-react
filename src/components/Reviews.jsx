function Review({ review }) {
  return (
    <div className="p-4 rounded border-2 ">
      <div className="flex ">
        <div className="bg-blue-600">{review}</div>
        <div className="flex flex-col">
          <p className="font-thin inline">Date</p>
          <p className="inline">Name</p>
        </div>
      </div>
      <div className="my-2">rating</div>
      <p>description</p>
    </div>
  )
}

function Reviews() {
  return (
    <div className="grid grid-cols-3 gap-36 border-t-2">
      <div className="flex flex-col col-span-2">
        <div className="bg-white m-6">
          <h1 className="text-lg bold">34 Reviews</h1>
          <p>4.5</p>
          <div className="flex flex-col gap-1 ">
            <Review review={5.1} />
            <Review review={5.2} />
          </div>
        </div>
      </div>
      <div className=" m-6">
        <div className="p-4 rounded border-2 m-2">
          <h2>Leave a Review</h2>
          <p>0</p>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}
export default Reviews
