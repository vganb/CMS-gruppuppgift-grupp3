'use client'
import { addDoc, collection, onSnapshot, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { createContext, useContext } from 'react';


const ApiContext = createContext()

const ApiContextProvider = ({ children }) =>{

    const getAllEvents = async()=>{

    }

    const addEvent = async(event,image)=>{
        try {
            await addDoc(collection(db,'event'),{
                title:event.title,
                date:event.date,
                time:event.time,
                seats:event.seats,
                image:image
            })
        } catch (error) {
            console.log(error.message)
        }
    }
 
    const value = {
        addEvent
    }

    return (
        <ApiContext.Provider value={{value}}>
            { children }
        </ApiContext.Provider>
    )
}

export default ApiContextProvider

export const useApiContext = () => {
    const context = useContext(ApiContext)

    if(!context){
        throw new Error('useApiContext must be within a provider')
    }

    return context
}

