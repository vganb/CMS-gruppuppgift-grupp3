'use client'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addEvent } from "@/lib/getCollection";

const formSchema = z.object({
  place: z.string().min(2).max(100),
  dateTime: z.string(), // Anpassa efter hur datum och tid sparas
  title: z.string().min(2).max(100),
  capacity: z.number().int().min(1),
  attendees: z.array(z.string()), // Användare som har bokat in sig
});

export const CreateEventForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      place: "",
      dateTime: "",
      title: "",
      capacity: 0,
      attendees: [],
    },
  });


  async function onSubmit(values) {
    try {
      // Anropa addEvent-funktionen med formulärdata
      const eventId = await addEvent(values);
      console.log("Event added with ID: ", eventId);
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="place"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Plats</FormLabel>
                <FormControl>
                  <Input placeholder="Plats" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Datum & tid</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rubrik</FormLabel>
                <FormControl>
                  <Input placeholder="Rubrik" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antal platser</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Skapa evenemang</Button>
        </form>
      </Form>
    </>
  );
};
