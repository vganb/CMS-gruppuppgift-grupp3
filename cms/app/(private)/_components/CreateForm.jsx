'use client'
import { Input } from '@/components/ui/input'
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FileDropZone } from './FileDropZone';
import { validate } from '../admin/create/validate';
import { useToast } from "@/components/ui/use-toast"
import { db } from '@/app/firebase.config';
import { addDoc, collection, onSnapshot, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { useAuth } from '@clerk/nextjs';



export const CreateForm = () => {

    const { userId } = useAuth()

    const router = useRouter()
    const [error, setError] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [form, setForm] = useState({
        title:'',
        date:'',
        time:'',
        seats:'',
        imageUrl:'',
        imageName:'',
        description:'',
        city:''
    })


const {toast} = useToast()

const handleInputValue = (e) =>{
    const { name, value } = e.target
    setForm({
        ...form,
        [name]:value,
    })
}

const handleImageUpload = async ({url,name}) =>{
   
 setForm({...form,imageUrl:url,imageName:name})
}

const handleDateSelection = (date) =>{
    setStartDate(date)
    setForm({
        ...form,
        date:format(date,'yyyy-MM-dd')
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate(form);
    if (validationError) {
        toast({
            title: 'Error',
            description: validationError,
            variant: 'destructive',
        });
        return;
    }
    await addDoc(collection(db,'events'),form)
    router.push('/admin/dashboard')
};

const errorHandlerDropZone = (error) =>{
    toast({
        title:error.title,
        description:error.description,
        variant:error.variant
    })
    return
}

  return (
    <div className='my-10'>
        <form className='' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center flex-col w-[500px] p-10 bg-emerald-500/40 border-2'>
                <div>
                    <h1 className='text-center text-white font-bold text-2xl mb-5'>Create Event</h1>
                </div>
                        <label className='text-white flex justify-center items-center mb-3'>Title</label>
                        <Input name='title' value={form.title} onChange={handleInputValue} placeholder='Enter a title'/>
                        <label className='text-white flex justify-center items-center my-3'>City</label>
                        <Input name='city' value={form.city} onChange={handleInputValue} placeholder='Ex. Stockholm'/>
                <div className=''>
                    <label className='text-white flex justify-center items-center my-3 container'>Date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                className={cn(
                                    "justify-start text-left font-normal",
                                    !startDate && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {startDate ? format(startDate, "P") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={startDate} onSelect={handleDateSelection} initialFocus />
                            </PopoverContent>
                        </Popover>
                   
                      
                </div>
                        <label className='text-white flex justify-center items-center my-3'>Number&nbsp;of&nbsp;seats</label>
                        <Input className='' name='seats' value={form.seats} onChange={handleInputValue} placeholder='Ex. 2500'/>
                        <label className='text-white flex justify-center items-center my-3'>Time</label>
                        <Input name='time' value={form.time} onChange={handleInputValue} placeholder='Ex. 09.00'/>


                        <label className='text-white flex justify-center items-center my-3'>Description</label>
                        <Input name='description' value={form.description} onChange={handleInputValue} placeholder='Short description...'/>

                <div className='flex justify-center items-center gap-4 mb-3 mt-10 container'>
                    <label className='text-white'>Image</label>
                    <div className=''>
                        <FileDropZone handleImageUpload={handleImageUpload} errorHandlerDropZone={errorHandlerDropZone}/>
                    </div>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <div className='flex justify-center items-center my-3'>
                    <Button className='w-[400px] bg-slate-800 hover:bg-slate-700 transition-colors' >Create</Button>
                </div>
            </div>
        </form>

    </div>
  )
}
