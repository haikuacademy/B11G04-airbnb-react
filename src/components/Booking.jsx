import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { check } from 'prettier'

function BookHouse({ house }) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [newBooking, setNewBooking] = useState(false)

  let house_id = useParams()

  const createBooking = async (e) => {
    e.preventDefault()

    let form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())

    formObject.house_id = house_id.id

    let apiResponse = await axios.post(
      `https://haiku-bnb.onrender.com/bookings`,
      formObject
    )
    setNewBooking(true)
    if (apiResponse.data.error) {
      console.log('Error:', apiResponse.data.error)
    }

    console.log(apiResponse.data.message)

    return apiResponse.data
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
                name="from_date"
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
                name="to_date"
                onChange={(e) => {
                  setEndDate(e.target.value)
                }}
              />
            </div>
          </div>
          {startDate !== '' && endDate !== '' && startDate > endDate ? (
            <span className="text-red-500">
              Check in date must be before check out
            </span>
          ) : (
            ''
          )}
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
