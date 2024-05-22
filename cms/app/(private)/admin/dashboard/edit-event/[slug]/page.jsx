"use client";
import React, { useEffect, useState } from "react";

import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

import EditEventForm from "../_components/editEventForm";
import { db } from "@/firebase.config";
import { usePathname } from "next/navigation";



const getEvent = async (eventId) => {
  const eventDoc = doc(db, "events", eventId);
  const eventSnapshot = await getDoc(eventDoc);
  if (eventSnapshot.exists()) {
    return { id: eventSnapshot.id, ...eventSnapshot.data() };
  } else {
    throw new Error("Event not found");
  }
};


const EventPage = () => {
  const [event, setEvent] = useState(null);
  const url = usePathname();

  const parts = url.split("/");
  const eventId = parts[parts.length - 1];



  useEffect(() => {
    const fetchEvent = async () => {
      const events = await getEvent(eventId);
      setEvent(events);
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
};

export default EventPage;
