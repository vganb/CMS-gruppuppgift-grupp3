'use client'
import { db } from '@/app/firebase.config'
import { doc, updateDoc } from '@firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


function EditEventForm( {event} ) {

  const router = useRouter()
  /* const [title, setTitle] = useState(event.title)

  const handleSubmit = async e => {
    e.preventDefault()
    if(title === '') return

    try {
      const eventRef = doc(db, 'events', event.id)
      await updateDoc(eventRef, {title})
      router.back()
    } catch (error) {
      console.error('Error updating doc');
      
    }
    
  }
 */


  return (
    <form /* onSubmit={handleSubmit} */ className="w-1/4 bg-emerald-300 rounded-md p-8  mt-20">
        <div className="flex flex-col flex-wrap gap-4">
          <div>
            <label htmlFor="title" className="block">
              Namn på event:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              /* value={title}
              onChange={e => setTitle(e.target.value)} */
              
              className="text-black w-full border rounded-md  px-3 py-2 "
            />
          </div>
          <div>
            <label htmlFor="location" className="block">
              Plats:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              // onChange={}
              // value={data.location}
              className="text-black w-full border rounded-md  px-3 py-2 "
            />
          </div>
          <div>
            <label htmlFor="time" className="block">
              Tid:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              // onChange={}
              //  value={data.time}
              className="text-black w-full border rounded-md  px-3 py-2 "
            />
          </div>
          <div>
            <label htmlFor="date" className="block">
              Datum:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              // onChange={}
              // value={data.date}
              className="text-black w-full border rounded-md  px-3 py-2 "
            />
          </div>
          <div>
            <label htmlFor="bookings" className="block">
              Antal platser:
            </label>
            <input
              type="number"
              id="bookings"
              name="bookings"
              // onChange={}
              // value={data.bookings}
              className="text-black w-full border rounded-md  px-3 py-2 "
            />
          </div>
          <div className="flex w-full ">

          <button  className=" capitalize border rounded-md bg-slate-600 p-2 w-1/2 text-white ">save</button>
          <button className=" ml-4 text-sm p-2  text-red-700 ">Delete Event</button>
          </div>
        </div>
      </form>
  )
}

export default EditEventForm