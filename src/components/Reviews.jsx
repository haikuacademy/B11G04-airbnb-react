import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import {
  faStar,
  faStarHalf,
  faComment
} from '@fortawesome/free-solid-svg-icons'

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
              <p className="font-thin inline">{review.date}</p>
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
  const getReviews = async () => {
    let { data } = await axios.get(
      'https://haiku-bnb.onrender.com/reviews' + (id ? '?house_id=' + id : '')
    )
    setReviews(data)
  }
  useEffect(() => {
    getReviews()
  }, [])
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
        <div className="p-4 rounded border border-gray-300">
          <div>Leave a Review</div>
          <form>
            <div className=" flex items-center text-yellow-500 mt-2">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <div className="text-black p-2"> 0</div>
            </div>
            <div className="border rounded border-gray-300 mt-3">
              <div className="">
                <textarea
                  rows="4"
                  className="bg-transparent resize-none outline-none text-gray-300 p-2 "
                >
                  Please leave a review...
                </textarea>
              </div>
            </div>
            <button>
              <div className=" border border-rounded text-white bg-red-400 mt-1 rounded-md py-2 px-3">
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
