import { Roles } from "../../types/global"
import { User, auth, getAuth } from "@clerk/nextjs/server"
import { NextApiResponse, NextApiRequest } from "next"
import { redirect, useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export const IsUserAdmin = (role: Roles) => {
    const { sessionClaims } = auth()
  
    return sessionClaims?.metadata.role === role;
}

export const ServerAdminCheck = () => {
    const { sessionClaims } = auth()

    const user = currentUser()
    if(!user) return null

    const isAdmin = sessionClaims?.metadata.role === "admin"

    if(!isAdmin) {
        redirect('/')
    } else return true
}