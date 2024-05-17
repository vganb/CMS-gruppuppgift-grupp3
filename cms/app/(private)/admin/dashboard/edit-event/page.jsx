


import React from "react";


function editEvents() {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1>Redigera Event</h1>
      <form className="max-w-md  mt-20">
        <div className="flex flex-wrap gap-4">
          <div>
            <label htmlFor="title" className="block">
              Namn på event:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              // onChange={}
              // value={data.title}
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

          <button className=" capitalize border rounded-md bg-slate-600 p-2 w-1/2 text-white ">save</button>
          <button className=" ml-4 text-sm p-2  text-red-700 ">Delete Event</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default editEvents;
