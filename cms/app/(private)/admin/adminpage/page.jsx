"use client"
import {IsUserAdmin} from "@/perms/adminPerms"
import { useState } from "react"

console.log(IsUserAdmin)

const AdminPage = () => {
  if(IsUserAdmin) return (
    <div>
      <p>This user is an admin</p>
    </div>
  ) 
  else return (
    <div>
      <p>This user is not an admin</p>
    </div>
  ) 

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