import { NextResponse } from "next/server";
import { getDoc, doc, updateDoc, arrayRemove } from '@firebase/firestore';
import { db } from "@/firebase.config";

export async function DELETE(req) {
  try {
    const { email, eventId } = await req.json();

    if (!email || !eventId) {
      return NextResponse.json({ message: 'Please provide an email and eventId' }, { status: 400 });
    }

    const docRef = doc(db, 'events', eventId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    const eventData = docSnap.data();
    const attendeesData = eventData.attendees || [];

    if (!attendeesData.includes(email)) {
      return NextResponse.json({ message: 'User is not booked for this event' }, { status: 400 });
    }

    await updateDoc(docRef, { attendees: arrayRemove(email) });

    return NextResponse.json({ message: 'Unbooking successful' }, { status: 200 });

  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ message: 'Could not cancel the booking, please try again' }, { status: 500 });
  }
}
