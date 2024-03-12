import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
axios.defaults.withCredentials = true

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FullStar({ review }) {
  let roundedrating
  let stars = []
  let icon = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
  roundedrating = Math.floor(review.rating)
  for (let i = 0; i < roundedrating; i++) {
    stars.push(icon)
  }
  return stars.map((star, index) => <div key={index}>{star}</div>)
}
function HalfStar({ review }) {
  let halfRatingCheck
  let rating = review.rating
  halfRatingCheck = (rating * 2) % 2
  if (halfRatingCheck) {
    return <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500" />
  }
}

function Review({ review }) {
  let rawDate = review.date
  let modifiedDate = rawDate.substring(0, 10)
  return (
    <div className="p-4 rounded border-2 ">
      <div className="flex ">
        <div className="flex flex-col">
          <div className="flex">
            <img
              src={review.author.picture}
              alt="User profile pic"
              className="rounded-full h-10 w-10 mr-2"
            />
            <div className="flex flex-col">
              <p className="font-thin inline">{modifiedDate}</p>
              <p>
                {review.author.firstName} {review.author.lastName}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 flex items-center">
        <FullStar review={review} />
        <HalfStar review={review} />
        <div className="font-bold px-1">{review.rating}</div>
      </div>
      <p>{review.content}</p>
    </div>
  )
}
function Reviews() {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const [reviewSubmit, setReviewSubmit] = useState(false)

  const getReviews = async () => {
    let { data } = await axios.get(
      'https://haiku-bnb.onrender.com/reviews' + (id ? '?house_id=' + id : '')
    )
    setReviews(data)
  }
  useEffect(() => {
    getReviews()
  }, [])

  const createReview = async (e) => {
    e.preventDefault()
    let form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    formObject.house_id = id
    console.log(formObject)

    let apiResponse = await axios.post(
      'https://haiku-bnb.onrender.com/reviews',
      formObject
    )

    console.log(apiResponse.data)
    setReviewSubmit(true)
    console.log(reviews)
    setReviews([...reviews, apiResponse.data])
    console.log(reviews)
    return reviews
  }
  return (
    <div className="container mx-auto grid grid-cols-3 gap-36 border-t-2">
      <div className="flex flex-col col-span-2">
        <div className=" my-6">
          <div className="flex items-center">
            <FontAwesomeIcon
              className="mr-2"
              icon={faComment}
            ></FontAwesomeIcon>
            <h1 className="text-lg font-bold">34 Reviews</h1>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500" />
            <p>4.5</p>
          </div>
          <div className="flex flex-col gap-1 ">
            {reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
      <div className=" m-6">
        {reviewSubmit === true ? (
          <span className="bg-green-200 p-1">Thank you for your review!</span>
        ) : (
          <div className="p-4 rounded border border-gray-300">
            <div>Leave a Review</div>
            <form onSubmit={(e) => createReview(e)}>
              <div className=" flex items-center text-yellow-500 mt-2">
                <div>
                  <input type="radio" name="rating" value="1" />
                  <input type="radio" name="rating" value="2" />
                  <input type="radio" name="rating" value="3" />
                  <input type="radio" name="rating" value="4" />
                  <input type="radio" name="rating" value="5" />
                </div>
                {/* <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /> */}
              </div>
              <div className="border rounded border-gray-300 mt-3">
                <div className="">
                  <textarea
                    name="content"
                    rows="4"
                    className="bg-transparent resize-none outline-none p-2 "
                    placeholder="Please leave a review..."
                  ></textarea>
                </div>
              </div>
              <button>
                <div className=" border border-rounded text-white bg-red-400 mt-1 rounded-md py-2 px-3">
                  Submit Review
                </div>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
export default Reviews
