
import { redirect, useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";

export const ClientAdminCheck = () => {
    const { user } = useUser();
    const router = useRouter()
    
    if(!user) return null

    const isAdmin = user.publicMetadata.role === 'admin'

    if(!isAdmin) {
      router.replace('/')
    } else return true
}