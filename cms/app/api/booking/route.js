import { NextResponse } from "next/server";
import { getDoc, doc, setDoc, collection, updateDoc, arrayUnion } from '@firebase/firestore';
import { db } from "@/app/firebase.config";

export async function POST(req) {
  try {
    const { email, eventId } = await req.json() 


    if (!email || !eventId) {
      return NextResponse.json({ message: 'Please provide an email and eventId' }, { status: 400 });
    }

    const docRef = doc(db, 'events', eventId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    const eventData = docSnap.data();
    const availableSeats = parseInt(eventData.seats, 10); 
    const attendeesData = eventData.attendees || []; 

   
    const isUserAlreadyBooked = attendeesData.includes(email)
    console.log(isUserAlreadyBooked)
    if (isUserAlreadyBooked) {
      return NextResponse.json({ message: 'User has already booked for this event' }, { status: 400 })
    }

    if (attendeesData.length >= availableSeats) {
      return NextResponse.json({ message: 'Booking is full' }, { status: 400 });
    }


    await updateDoc(docRef, { attendees: arrayUnion(email) })


    return NextResponse.json({ message: 'Booking successful' }, { status: 200 });

  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ message: 'Could not book the event, please try again' }, { status: 500 });
  }
}
