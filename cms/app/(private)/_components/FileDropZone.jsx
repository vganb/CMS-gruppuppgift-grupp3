'use client'
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { cn } from "@/lib/utils";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '@/firebase.config';
//Hur ska vi spara bilderna?
const MAX_FILE_SIZE = 5 * 1024 * 1024 //5mb
const FILE_TYPE = ['jpg','png','jpeg','webp','svg']


export const FileDropZone = ({errorHandlerDropZone,handleImageUpload}) => {

const [loading, setLoading] = useState(false)
const [image, setImage] = useState(null)

const uploadFile = async (file)=>{
if(loading) return
setLoading(true)

try {
  // console.log(file)
 const fileRef = ref(storage,`images/${file.name}`) 
 const result = await uploadBytes(fileRef,file)

 const downloadUrl = await getDownloadURL(fileRef)

 handleImageUpload({url:downloadUrl,name:file.name})

} catch (error) {
  console.error(error.message)
  const errorMessage = {title:'Error',
  description:'Failed to upload the Image,please try again'
  ,variant:'destructive'}
  errorHandlerDropZone(errorMessage)
} finally{
  setLoading(false)
}
}

const onDrop = async (acceptedFiles) =>{
  const file = acceptedFiles[0]
  const reader = new FileReader()

  reader.onabort = () => {
    const errorMessage = {title:'Error',description:'file reading was aborted',variant:'destructive'}
    errorHandlerDropZone(errorMessage) 
  }
  reader.onerror = () => {
    const errorMessage = {title:'Error',description:'file reading has failed',variant:'destructive'}
    errorHandlerDropZone(errorMessage)
  }
  
  reader.onload = async => {
     setImage(acceptedFiles[0].name)   
     uploadFile(file)
  }
  reader.readAsArrayBuffer(file)
}



  return (
    <div className=''>

<Dropzone accept={FILE_TYPE} maxSize={MAX_FILE_SIZE} maxFiles={1} onDrop={onDrop }>
  {({getRootProps, 
  getInputProps,
  isDragActive,
  isDragReject,
  fileRejections}) => {

    //TODO ordna så att man inte kan skicka in fel fil typ
    const isToLarge = fileRejections.length > 0 && fileRejections[0].file.size > MAX_FILE_SIZE
    const wrongFileType = fileRejections.length > 0 && FILE_TYPE.some(type => fileRejections[0].file.name.endsWith(type)) 

  return (
    <section>
      {
      image ? 
      <div {...getRootProps()} className={cn('cursor-pointer p-10 bg-slate-400/60 hover:bg-slate-400/40'
      ,isDragActive && 'bg-slate-400/40',
      isDragReject && 'bg-red-500/10')}>
        <input {...getInputProps()} />
      <p className='text-white'>{image}</p>
        {isDragReject && <p className='text-red-500'>Filetype not accepted</p>}
        {isToLarge && <p className='text-white border bg-red-500 text-center'>The image file size is to large</p>}
        {wrongFileType && <p className='text-white border bg-red-500 text-center'>Filetype not accepted </p>}
      </div> :      
       <div {...getRootProps()} className={cn('cursor-pointer p-10 bg-slate-400/60 hover:bg-slate-400/40'
      ,isDragActive && 'bg-slate-400/40',
      isDragReject && 'bg-red-500/10')}>
        <input {...getInputProps()} />
      <p className='text-white'>Drag Image or click to select image</p>
        {isDragReject && <p className='text-red-500'>Filetype not accepted</p>}
        {isToLarge && <p className='text-white border bg-red-500 text-center'>The image file size is to large</p>}
        {wrongFileType && <p className='text-white border bg-red-500 text-center'>Filetype not accepted </p>}
      </div>
      }
    </section>
  )}}
</Dropzone>
    </div>
  )
}
