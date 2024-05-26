'use client';


import { doc, setDoc, updateDoc } from '@firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { db } from '@/firebase.config';

function EditEventForm({ event }) {
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [city, setCity] = useState(event?.city || '');
  const [time, setTime] = useState(event?.time || '');
  const [date, setDate] = useState(event?.date || '');
  const [seats, setSeats] = useState(event?.seats || '');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!title || !description || !city || !time || !date || !seats) {
      alert('All fields are required.');
      return;
    }

    try {
      // Reference to the event document
      const eventRef = doc(db, 'events', event.id);

      // Update the event document with new data
      await setDoc(eventRef, {
        title,
        description,
        city,
        time,
        date,
        seats,
      });

     

      // Redirect to the events page
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error updating event: ', error);
      alert('Failed to update event. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/3 bg-slate-800 rounded-md p-20 mt-20">
      <div className="flex flex-col flex-wrap gap-4">
        <div>
          <label htmlFor="title" className="block text-white font-semibold">
            Namn på event:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-white font-semibold">
            Beskrivning
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-white font-semibold">
            Plats:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-white font-semibold">
            Tid:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-white font-semibold">
            Datum:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="seats" className="block text-white font-semibold">
            Antal platser:
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={seats}
            onChange={e => setSeats(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="flex w-full">
          <button type="submit" className="capitalize border rounded-md bg-slate-600 p-2 w-1/2 text-white">
            Save
          </button>
          <button type="button" className="ml-4 text-sm p-2 text-red-700">
            Delete Event
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditEventForm;
