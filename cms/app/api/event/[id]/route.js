import { db } from "@/app/firebase.config";
import { getDoc, doc } from "@firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, { params }){
    try {
        const { id } = params

        if(!id){
            return NextResponse.json({message:'Please enter correct Id of the event'})
        }

        const docRef = doc(db,'events',id)
        const docSnap = await getDoc(docRef)
        return NextResponse.json(docSnap.data())

    } catch (error) {
        console.error(error.message)
        return NextResponse.json({message:'Could not find the id provided'})
    }
}