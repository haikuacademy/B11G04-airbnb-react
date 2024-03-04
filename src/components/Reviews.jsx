import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faComment
} from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <div className="font-bold px-1">{review.rating}</div>
      </div>
      <p>{review.content}</p>
    </div>
  )
}

function Reviews() {
  const reviews = [
    {
      content: 'Bathroom did not live up to expectations. =(',
      rating: 2,
      date: '2024-02-01',
      author: {
        firstName: 'John',
        lastName: 'Smith',
        picture: 'https://randomuser.me/api/portraits/men/85.jpg'
      }
    },
    {
      content: 'This place very warm, unlike Siberia!',
      rating: 3.5,
      date: '2024-01-10',
      author: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg'
      }
    },
    {
      content: 'This place is amazing! I wanna stay here for ever. =D',
      rating: 5,
      date: '2024-02-05',
      author: {
        firstName: 'Khadira',
        lastName: 'Khan',
        picture: 'https://randomuser.me/api/portraits/women/15.jpg'
      }
    }
  ]
  return (
    <div className="grid grid-cols-3 gap-36 border-t-2">
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
