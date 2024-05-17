"use server"

import { checkRole } from "@/utils/roles";
import { clerkClient } from "@clerk/nextjs/server";

async function setRole(formData) {
  // Check that the user trying to set the role is an admin
  if (!checkRole("admin")) {
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

module.exports = { setRole };