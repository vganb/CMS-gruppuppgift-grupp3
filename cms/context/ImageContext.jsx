'use client'
import { createContext, useContext, useState } from 'react';



const ImageContext = createContext()

const ImageContextProvider = ({children})=>{

    const [imageData, setImageData] = useState(null)

    const setImage = (data) =>{
        setImageData(data)
    }
    
    const value={
        setImage,
        imageData
    }

    return (
        <ImageContext.Provider value={{value}}>
            { children }
        </ImageContext.Provider>
    )
}

export default ImageContextProvider

export const useImageContext = () =>{
    const context = useContext(ImageContext)
    
    if(!context){
        throw new Error('ImageContext must within a provider')
    }

    return context
}