import { clerkClient } from "@clerk/nextjs/server";

export async function AddRole(userId, role) {
  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: role,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to update user role:", error);
    return { success: false, error: error };
  }
}
