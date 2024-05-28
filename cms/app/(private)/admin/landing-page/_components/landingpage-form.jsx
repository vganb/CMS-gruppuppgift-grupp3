'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { db } from "@/firebase.config"
import { doc, getDoc, updateDoc} from "firebase/firestore"


const getDocumentById = async (pages, docId) => {
    const docRef = doc(db, pages, docId)
    const docSnap = await getDoc(docRef)
  
    if(docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      return null
    }
}
  

const updateDocument = async (pages, docId, data) => {
    const docRef = doc(db, pages, docId)
    await updateDoc(docRef, data)
    return docRef
}

export const LandingPageForm = () => {

    useEffect(() => {
        const getData = async () => {
            const data = await getDocumentById('pages', 'landing-page')
            setFormData({
                heading: data.heading,
                subheading:data.subheading
            })
        }
        getData()
    }, [])
    

    const [formData, setFormData] = useState({
        heading: '',
        subheading:''
    })

    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onChange = e => {
        setFormData(data => ({
            ...data, 
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!formData.heading || !formData.subheading) {
            setErrorMessage('Please fill in all the fields')
            setTimeout(() => { setErrorMessage('') }, 4000)
            return
        }
        try {
            const doc = await updateDocument('pages', 'landing-page', formData)
            setErrorMessage('')
            setMessage('Data saved successfully')
            setTimeout(() => { setMessage('') }, 4000)

        } catch (error) {
            console.log(err.message)
            setErrorMessage('Something went wrongm please try again later')
            setTimeout(() => { setErrorMessage('') }, 4000)
        }
    }

    return (

            
        <form className="flex flex-col justify-center space-y-6 w-1/2" onSubmit={handleSubmit}>
            
            {
                errorMessage && (
                    <div className="flex justify-center">
                        <p className="text-red-500 px-10 bg-red-500/20 py-2 rounded-lg">{errorMessage}</p>
                    </div>
                )
            }
            {
                message && (
                    <div className="flex justify-center">
                        <p className="text-green-500 px-10 bg-green-500/20 py-2 rounded-lg">{message}</p>
                    </div>
                )
            }

          <div className="space-y-2" >
              <label htmlFor="heading">Heading</label>
              <Input id="heading" value={formData.heading} onChange={onChange} />
          </div>
          <div className="space-y-2" >
              <label htmlFor="subheading">Sub Heading</label>
              <Input id="subheading" value={formData.subheading} onChange={onChange} />
          </div>
          <Button>Save</Button>
      </form>
  )
}