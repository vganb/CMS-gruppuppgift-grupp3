
/*import { ServerAdminCheck } from "@/app/perms/ServerAdminCheck";
import { redirect } from "next/navigation";
import { SearchUsers } from "./SearchUsers";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "@/app/perms/AdminHandler";
import './admin.css'

export default async function AdminPage() {
  if (!ServerAdminCheck) {
    redirect("/");
  }
  const searchParams = new URLSearchParams(window.location.search)
 
  const search = searchParams.get('search')

  console.log("this is my search:",search)

  const users = search ? await clerkClient.users.getUserList({ search }) : [];

  console.log("these are my users:", users)

  return (
    <div className="page">
      <SearchUsers />

      <div className="list">

     </div>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div>
            {
              user.emailAddresses.find(
                (email) => email.id === user.primaryEmailAddressId
              )?.emailAddress
            }
          </div>
          <div>{user.publicMetadata.role}</div>
          <div>
            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="admin" name="role" />
              <button type="submit">Make Admin</button>
            </form>
          </div>
          <div>
            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="moderator" name="role" />
              <button type="submit">Make Moderator</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}*/
