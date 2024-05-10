'use client'
import { useEffect, useState } from "react";

async function fetchEvents() {
  try {
    const res = await fetch('api/events'); // Anropa Next.js-routen för att hämta evenemang
    if (!res.ok) {
      throw new Error('Failed to fetch events');
    }
    const events = await res.json(); // Konvertera svaret till JSON
    console.log(events); // Använd evenemangen här
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return null;
  }
}

const EventList = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(data => {
      if (data) {
        setEvents(data);
      }
    });
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
