'use client'
import React, { useState, useEffect } from 'react';
import { CreateEventForm } from "./components/create-form"

function CreatePage() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  return (
    <div>
        <h1 className="text-4xl font-bold my-5" > Create an event </h1>
        <CreateEventForm events={events} setEvents={setEvents} />
         <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>Plats: {event.place}</p>
            <p>Datum & tid: {event.dateTime}</p>
            <p>Antal platser: {event.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CreatePage

