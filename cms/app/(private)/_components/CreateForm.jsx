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
import { useApiContext } from '@/context/apiContext';
import { useImageContext } from '@/context/ImageContext';


export const CreateForm = () => {
    const [error, setError] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [form, setForm] = useState({
        title:'',
        date:'',
        time:'',
        seats:'',
    })

const { addEvent } = useApiContext()
const {toast} = useToast()
const { imageData } = useImageContext()

const handleInputValue = (e) =>{
    const { name, value } = e.target
    setForm({
        ...form,
        [name]:value,
    })
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
    
    await addEvent(form,imageData)
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
    <div>
        <form onSubmit={handleSubmit}>
            <div className='p-10 border-2 container'>
                <div>
                    <h1 className='text-center text-white font-bold text-2xl mb-5'>Create Event</h1>
                </div>
                <div className='flex justify-center items-center gap-4 mb-3 container'>
                    <label className='text-white'>Title</label>
                    <Input name='title' value={form.title} onChange={handleInputValue}/>
                </div>
                <div className='flex justify-center items-center gap-4 mb-3 container '>
                    <label className='text-white'>Date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                className={cn(
                                    "w-1/3 justify-start text-left font-normal",
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
                   
                        <label className='text-white'>Time</label>
                        <Input name='time' value={form.time} onChange={handleInputValue}/>
                    <label className='text-white'>Number&nbsp;of&nbsp;seats</label>
                    <Input name='seats' value={form.seats} onChange={handleInputValue}/>
                </div>
                <div className='flex justify-center items-center gap-4 mb-3 mt-10 container'>
                    <label className='text-white'>Image</label>
                    <div className=''>
                        <FileDropZone errorHandlerDropZone={errorHandlerDropZone}/>
                    </div>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <div className='flex justify-end container'>
                    <Button>Create</Button>
                </div>
            </div>
        </form>

    </div>
  )
}
