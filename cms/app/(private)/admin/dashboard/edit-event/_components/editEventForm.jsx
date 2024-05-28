"use client";

import { doc, setDoc, deleteDoc } from "@firebase/firestore";
import {
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "@firebase/storage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { db, storage } from "@/firebase.config";

function EditEventForm({ event }) {
  const router = useRouter();
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({
    title: event.title,
    description: event.description,
    city: event.city,
    date: event.date,
    time: event.time,
    seats: event.seats,
  });
  const [selectedImage, setSelectedImage] = useState(null); // Change 1: Initial state to null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (
      !formData.title ||
      !formData.description ||
      !formData.city ||
      !formData.date ||
      !formData.time ||
      !formData.seats
    ) {
      setFormError("All fields are required");
      setTimeout(() => setFormError(null), 4000);
      return;
    }

    try {
      if (selectedImage) { // Change 2: Check if a new image is selected
        if (event.imageName) {
          const fileRef = ref(storage, `images/${event.imageName}`);
          await deleteObject(fileRef); // Change 3: Delete existing image
        }

        const fileRef = ref(storage, `images/${selectedImage.name}`);
        await uploadBytes(fileRef, selectedImage); // Change 4: Upload new image directly
        const downloadURL = await getDownloadURL(fileRef);

        await updateDocument("events", event.id, {
          ...formData,
          attendees: event.attendees,
          imageUrl: downloadURL, // Change 5: Update document with new image URL
          imageName: selectedImage.name, // Change 6: Update document with new image name
        });
      } else {
        await updateDocument("events", event.id, {
          ...formData,
          attendees: event.attendees,
        });
      }

      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err.message);
      setFormError("Something went wrong, please try again later");
    }
  };

  const updateDocument = async (collection, id, data) => {
    try {
      const docRef = doc(db, collection, id);
      await setDoc(docRef, data, { merge: true });
    } catch (err) {
      console.error("Error:", err);
      setFormError("Failed to update document");
    }
  };

  const onChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const handleDelete = async () => {
    try {
      const docRef = doc(db, "events", event.id);
      await deleteDoc(docRef);
      router.push("/admin/dashboard");
    } catch (err) {
      console.error("Error:", err);
      setFormError("Failed to delete event");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 rounded-md p-20">
      <div className="flex flex-col flex-wrap gap-4">
        {formError && <p className="text-red-500">{formError}</p>}
        <div>
          <label htmlFor="title" className="block text-white font-semibold">
            Event Name:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-white font-semibold"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={onChange}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-white font-semibold">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={onChange}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-white font-semibold">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-white font-semibold">
            Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={onChange}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="seats" className="block text-white font-semibold">
            Seats:
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={onChange}
            className="text-black w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="imageName" className="block text-white font-semibold">
            Event Image:
          </label>
          <input
            type="file"
            id="imageName"
            name="imageName"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])} // Change 7: Set selectedImage state with the selected file object
            className="text-white w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            className="capitalize border rounded-md bg-slate-600 p-2 w-1/2 text-white"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="ml-4 text-sm p-2 text-red-700"
          >
            Delete Event
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditEventForm;
