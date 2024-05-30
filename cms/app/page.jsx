'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

import { db } from "@/firebase.config"
import { doc, getDoc} from "firebase/firestore"


const getDocumentById = async (pages, docId) => {
  const docRef = doc(db, pages, docId)
  const docSnap = await getDoc(docRef)

  if(docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  } else {
    return null
  }
}

const HomePage = () => {

  
  const [pageData, setPageData] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      const data = await getDocumentById('pages', 'landing-page')
      setPageData(data)
   }
   getData()
  }, [])
  

  if(!pageData) return

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-slate-600">
      <h1 className="text-6xl font-bold mb-4 text-center">{pageData.heading}</h1>
      <p className="text-center text-muted-foreground">{pageData.subheading}</p>
      <Button asChild className="mt-10">
        <Link href="/admin/dashboard">Get started</Link>
      </Button>
    </div>
    
  )
}
export default HomePage

