'use client'
import { UserButton } from "@clerk/nextjs"

const Dashboard = () => {
  return (
    <div><UserButton afterSignOutUrl="/"/>hejj</div>
  )
}
export default Dashboard