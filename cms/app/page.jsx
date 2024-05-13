
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

    </div>
    
  )
}
export default HomePage

