"use client"
import {IsUserAdmin} from "@/perms/adminPerms"
import { useState } from "react"
import { useUser } from "@clerk/nextjs";
import { Protect } from "@clerk/nextjs";


const AdminPage = () => {

  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user)

  return (
    <Protect
      permission="org:sys_memberships:manage"
      fallback={<p>Only an admin can access this content.</p>}
    >
      <div>
        <p>Welcome</p>
      </div>
    </Protect>
  )

  /*if(IsUserAdmin && user) return (
    <div>
      <p>Hello admin {user.fullName}</p>
    </div>
  ) 
  else if (user) return (
    <div>
      <p>{user.fullName}, you are not an admin</p>
    </div>
  ) 
  else return (
    <div>
      <p>User is not logged in</p>
    </div>
  )*/

  /*return (
    <div>{IsUserAdmin ? (
        <p>This user is an admin</p>
      ) : (
        <p>This user is not an admin</p>
      )}
      </div>
  )*/
}

export default AdminPage