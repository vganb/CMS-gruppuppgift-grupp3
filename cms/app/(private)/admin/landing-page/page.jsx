
import { LandingPageForm } from "./_components/landingpage-form"
import {ServerAdminCheck} from '@/app/perms/ServerAdminCheck'

function AdminLandingPage() {
  ServerAdminCheck()
  return (
      <div className="h-screen flex flex-col items-center bg-slate-600">
          <h1 className="text-6xl font-bold mb-4 text-center text-white">Edit Landing Page</h1>
          <LandingPageForm/>
    </div>
  )
}
export default AdminLandingPage