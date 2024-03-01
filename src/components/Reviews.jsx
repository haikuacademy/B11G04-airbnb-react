import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPen, faStar } from '@fortawesome/free-solid-svg-icons'

function Review({ review }) {
  return (
    <div className="p-4 rounded-md ">
      <div className="">
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
    <div className="container mx-auto grid grid-cols-3 gap-36 border-t-2">
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
        <div className="p-4 rounded border border-gray-300">
          <div>Leave a Review</div>
          <form>
            <div className="mt-2">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="border rounded border-gray-300 mt-3">
              <div className="">
                <textarea
                  rows="4"
                  className="bg-transparent resize-none outline-none text-gray-300"
                >
                  Please leave a review...
                </textarea>
              </div>
            </div>
            <button>
              <div className=" border border-rounded text-white bg-red-500 mt-4 p-4 rounded-md ">
                Submit Review
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Reviews
