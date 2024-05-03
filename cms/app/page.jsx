import { UserButton } from "@clerk/nextjs"

const HomePage = () => {
  return (
    <div className="h-screen bg-slate-600">
    <UserButton fallbackRedirectUrl="/"/>
    </div>
    
  )
}
export default HomePage

// TEST MERGE COMMENT