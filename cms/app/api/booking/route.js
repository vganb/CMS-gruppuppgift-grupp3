import { NextResponse } from "next/server"


export async function POST(req) {
    const { email,eventId } = await req.json()

    if(!email && !eventId){
        return NextResponse({ message:'Please send right'},{status:400})
    }
}