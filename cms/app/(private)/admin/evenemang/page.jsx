'use client'
import { getEvents } from '@/lib/getCollection';
import React, { useState, useEffect } from 'react';
/*import { CreateEventForm } from "./components/create-form"*/

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

    </div>
  )
}
export default CreatePage

