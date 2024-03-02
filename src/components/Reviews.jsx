import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalf,
  faComment
} from '@fortawesome/free-solid-svg-icons'
// import { faHouse } from '@fortawesome/free-regular-svg-icons'

function Review() {
  let reviews = [
    {
      content:
        'Great place to stay! The house is very clean comfortable, and the location is perfect. The host was very and helpful. Highly recommend!',
      rating: 4,
      date: '24 Jan 2024',
      author: {
        firstName: 'Mike',
        lastName: 'Lino',
        picture: 'https://randomuser.me/api/portraits/men/84.jpg'
      }
    }
  ]
  return (
    <>
      {reviews.map((r, i) => {
        ;<div className="p-4 rounded border-2 ">
          <div className="flex ">
            <div className="flex flex-col">
              <div className="flex">
                <img
                  src={r.picture}
                  alt="Mike Lino"
                  className="rounded-full h-10 w-10 mr-2"
                />

                <div className="flex flex-col">
                  <p className="font-thin inline">{r.date}</p>
                  <p>
                    {r.author.firstName} {r.author.lastName}
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
            <div className="font-bold px-1">4</div>
          </div>
          <p>{r.content}</p>
        </div>
      })}
    </>
  )
}

function Reviews() {
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
            <Review />
            <Review />
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
