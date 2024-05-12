import { db } from "@/firebase.config";
import { addDoc, collection } from "firebase/firestore";


export async function addEvent(eventData) {
  try {
    const eventsCollection = collection( db, 'events');
    const docRef = await addDoc(eventsCollection, eventData);

    console.log("Event added with ID: ", docRef.id);

    return docRef.id; // Return the ID of the newly added event
  } catch (error) {
    console.error("Error adding event: ", error);
    return null;
  }
}
