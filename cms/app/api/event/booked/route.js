import { collection, getDocs, query, where } from "@firebase/firestore"
import { db } from "@/firebase.config";
import { NextResponse } from "next/server";


export async function POST(req) {
    const { email } = await req.json()
    
    const q = query(collection(db, "events"), where("attendees", "array-contains", email))
    const querySnapshot = await getDocs(q)
    const events = []
    querySnapshot.forEach(doc => { events.push({ id: doc.id, ...doc.data()})})

    return NextResponse.json(events, { status: 200 })
}