'use client'
import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import EditEventForm from "../_components/editEventForm";


const getEvent = async () => {
  const eventsCollection = collection(db, "events");
  const eventsSnapshot = await getDocs(eventsCollection);
  return eventsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

const EventPage = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const events = await getEvent();
      setEvent(events[1]); 
    };

    fetchEvent();
  }, []);

  if (!event) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h1>{event.title}</h1>
      <EditEventForm event={event} />
    </div>
  );
}

export default EventPage;
