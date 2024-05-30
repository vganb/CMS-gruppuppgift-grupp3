import { db } from "@/firebase.config";
import { getDoc, doc } from "@firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!id) {
      return NextResponse.json({ message: 'Please enter correct Id of the event' });
    }

    const docRef = doc(db, 'events', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }

    const eventData = docSnap.data();
    const userBooked = eventData.attendees?.includes(email) || false;

    return NextResponse.json({ ...eventData, userBooked });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ message: 'Could not find the id provided' });
  }
}
