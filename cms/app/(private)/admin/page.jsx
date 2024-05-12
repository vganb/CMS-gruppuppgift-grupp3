"use client"

import { UserButton } from "@clerk/nextjs"
import Dashboard from "../dashboard/page"
import { CreateEventForm } from "./evenemang/components/create-form"





const ProtectedPage = () => {
  if(CreateEventForm) return (
    <div>
      <p>This user is an admin</p>
      <Button asChild className="mr-5">
      <Link href="/evenemang">
          Add Evenemang
      </Link>
      </Button> 
      <UserButton afterSignOutUrl="/"/>
    </div>
    
  ) 
  else return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default ProtectedPage