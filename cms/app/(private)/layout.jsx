'use client'

import { useAuth } from "@clerk/nextjs"

const {user, authloaded} = useAuth()

function LayoutPage({children}) {
  

    return (
    <div>
        {children}
    </div>
  )
}
export default LayoutPage