"use server"
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function AddRole(userId, role) {
  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: role,
      },
    });
    revalidatePath('/admin/manage-users')
    return { success: true };
  } catch (error) {
    console.error("Failed to update user role:", error);
    return { success: false, error: error };
  }
}
