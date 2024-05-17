
import {IsUserAdmin, ServerAdminCheck} from "@/app/perms/ServerAdminCheck"
import { redirect } from "next/navigation";
//import {ServerAdminCheck} from '../app/perms/adminPerms.ts'


const AdminPage = () => {

  if (!ServerAdminCheck) {
    redirect("/")
  }

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the 'admin' role.</p>
    </>
  )
}

export default AdminPage