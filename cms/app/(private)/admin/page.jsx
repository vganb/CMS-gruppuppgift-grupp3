"use client"


import Dashboard from "../dashboard/page"
import { Button } from "@/components/ui/button"
import Link from "next/link"
/*import { CreateEventForm } from "./evenemang/components/create-form"*/


const ProtectedPage = () => {
  if(ProtectedPage) return (
    <div>
      <p>This user is an admin</p>
      <Button asChild className="mr-5">
      <Link  href= "/admin/evenemang">
          Add Evenemang
      </Link>
      </Button> 
    </div>
    
  ) 
  else return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default ProtectedPage