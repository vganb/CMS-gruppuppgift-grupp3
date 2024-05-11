
import { Button } from "@/components/ui/button"

import Link from "next/link"

const HomePage = () => {
  return (
    <div className="h-12 bg-slate-600 text-center">
      <Button asChild className="mr-5" >
      <Link href= "/sign-in">
        Sign in
      </Link>
      </Button>

      <Button asChild className="mr-5">
      <Link href="/evenemang/create">
          Add Evenemang
      </Link>
      </Button> 
      <div className="py-5">
      
      </div> 
    </div>
    
  )
}
export default HomePage

