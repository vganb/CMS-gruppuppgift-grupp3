
import { db } from "@/app/firebase.config";
import {collection, getDocs } from "firebase/firestore";

export default async function getEvents() {
  const eventsCollection = collection(db, 'events');
  const eventsSnapshot = await getDocs(eventsCollection);

  const events = [];

  eventsSnapshot.forEach(doc => {
    events.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return events;
}
