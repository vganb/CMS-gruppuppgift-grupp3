import { useState, useContext, createContext } from "react"
import { useAuth } from "@clerk/nextjs"

export const IsUserAdmin = () => {

    const { has } = useAuth();

    const canManageSettings = has({ permission: "org:sys_memberships:manage" });

    if(!canManageSettings) return false
    else return true
}
