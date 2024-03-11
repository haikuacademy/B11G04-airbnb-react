import { useState, useEffect } from 'react'
import axios from 'axios'

function BookHouse({ house, id }) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [newBooking, setNewBooking] = useState(false)

  const createBooking = (e) => {
    e.preventDefault()
    console.log(id)

    // console.log(e.target)
    const bookingContent = {
      house_id: id.value,
      from_date: e.target.checkIn.value,
      to_date: e.target.checkOut.value,
      message: e.target.message.value
    }
    console.log(bookingContent)

    let postBooking = async () => {
      let apiResponse = await axios.post(
        `https://haiku-bnb.onrender.com/bookings`,
        {
          house_id: id,
          from_date: bookingContent.from_date,
          to_date: bookingContent.to_date,
          message: bookingContent.message
        }
      )
      setNewBooking(true)

      //   console.log(postBooking(id))

      return apiResponse.data
    }

    postBooking(bookingContent)
    // console.log(bookingContent)
  }

  useEffect(() => {
    if (!startDate || !endDate) {
      return
    }

    let start = new Date(startDate)
    let end = new Date(endDate)

    let totalTime = end.getTime() - start.getTime()

    let totalDays = Math.round(totalTime / (1000 * 3600 * 24))

    setNights(totalDays)
  }, [startDate, endDate])

  useEffect(() => {
    setTotalPrice(nights * house.price)
  }, [nights])

  return (
    <form
      onSubmit={(e) => createBooking(e)}
      className="border-2 p-4 x-20 border-gray-300 rounded"
    >
      <div>
        <strong className="text-lg">$120</strong>
        /night
      </div>
      {!newBooking ? (
        <div className="pb-1 text-lg">
          <div className="flex">
            <div className="flex flex-col">
              <label>Check-in</label>
              <input
                className="border-2 p-2 my-2 mr-2 rounded"
                type="date"
                name="checkIn"
                onChange={(e) => {
                  setStartDate(e.target.value)
                }}
              />
            </div>
            <div className="flex flex-col">
              <label>Check-out</label>
              <input
                className="border-2 p-2 my-2 rounded"
                type="date"
                name="checkOut"
                onChange={(e) => {
                  setEndDate(e.target.value)
                }}
              />
            </div>
          </div>
          <textarea
            className="border-2 w-full p-2"
            cols="30"
            rows="6"
            name="message"
            placeholder="Please send a message to the host..."
          ></textarea>
          <div className="flex justify-between">
            <div className="text-lg">
              {nights} nights = <strong>${totalPrice}</strong>
            </div>
            <button className="rounded p-2  text-white bg-red-400">
              Reserve
            </button>
          </div>
        </div>
      ) : (
        <span>Thank you for your reservation!</span>
      )}
    </form>
  )
}

export default BookHouse
