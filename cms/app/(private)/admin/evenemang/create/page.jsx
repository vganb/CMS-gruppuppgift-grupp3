'use client'
import { CreateEventForm } from "./components/create-form"
import React, { useState, useEffect } from 'react';
import { getEvents } from '@/lib/getCollection'; // Uppdatera importen

function Create() {

    const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents(); // Använd async/await för att vänta på att getEvents ska slutföra
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
    <h1 className="text-4xl font-bold my-5">Create an event</h1>
    <CreateEventForm/>
    <h2>Events List</h2>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <p>Title: {event.title}</p>
          <p>Date & Time: {event.dateTime}</p>
          <p>Place: {event.place}</p>       
        </li>
      ))}
    </ul>
  </div>
);
}

export default Create;