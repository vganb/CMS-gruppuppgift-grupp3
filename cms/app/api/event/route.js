import { collection,query,getDocs, updateDoc } from "@firebase/firestore";
import { db } from "@/firebase.config";
import { NextResponse } from "next/server";
export async function GET(){
    try {
        const q = query(collection(db,'events'))
        if(!q){
            return NextResponse.json({message:'Could not retrieve data'},{status:500})
        }
        
        const querySnapshot = await getDocs(q)
        const events = []
        querySnapshot.forEach((doc)=>{
        const data = doc.data()
        events.push({id:doc.id,...data})    
        })
        return NextResponse.json(events)
        
    } catch (error) {
        console.error(error.message)
        return NextResponse.json({message:'Could not retrieve data'})
    }

}

