
import { redirect, useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
///En funktion som returnerar true om användaren har metadatan "admin", och om inte, redirect till startsidan. Denna funktion kan enbart användas på client sidor
export const ClientAdminCheck = () => {
    const { user } = useUser();
    const router = useRouter()
    
    if(!user) return null

    const isAdmin = user.publicMetadata.role === 'admin'

    if(!isAdmin) {
      router.replace('/')
    } else return true
}