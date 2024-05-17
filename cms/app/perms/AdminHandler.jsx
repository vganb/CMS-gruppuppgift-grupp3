"use server"

import { ServerAdminCheck, checkRole } from "./ServerAdminCheck";
import { clerkClient } from "@clerk/nextjs/server";

export default async function setRole(formData) {
  // Check that the user trying to set the role is an admin
  if (!ServerAdminCheck) {
    return { message: "Not Authorized" };
  }

  try {
    const res = await clerkClient.users.updateUser(
      formData.get("id"),
      {
        publicMetadata: { role: formData.get("role") },
      }
    );
    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}