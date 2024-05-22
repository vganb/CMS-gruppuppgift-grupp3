import { ServerAdminCheck } from "@/app/perms/ServerAdminCheck";
import { redirect } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";
import UserList from './UserList';
import './admin.css';

export default async function AdminPage() {
  if (!ServerAdminCheck) {
    redirect("/");
  }

  const { data } = await clerkClient.users.getUserList({});

  const plainUsers = data.map(user => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    primaryEmailAddress: user.primaryEmailAddress.emailAddress,
    publicMetadata: user.publicMetadata
  }));

  return (
    <div className="page">
      <h1 className="listHeader">Registered Users</h1>
      <UserList users={plainUsers} />
    </div>
  );
}
