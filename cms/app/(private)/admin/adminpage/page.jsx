"use client"
import {IsUserAdmin} from "@/perms/adminPerms"
import { useState } from "react"

console.log(IsUserAdmin)

const AdminPage = () => {
  return (
    <div>{IsUserAdmin ? (
        <p>This user is an admin</p>
      ) : (
        <p>This user is not an admin</p>
      )}
      </div>
  )
}

export default AdminPage