
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"



function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between h-14 border-b">
         <Link href="/admin"> backoffice system</Link>

        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
export default Header