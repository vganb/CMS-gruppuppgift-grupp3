import React, { useState, useEffect } from "react";
import { db } from '@/firebase.config';  
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DeltagerList = () => {
  const [loading, setLoading] = useState(true);
  const [deltagare, setDeltagare] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      const eventsCollection = collection(db, 'events');
      const eventSnapshot = await getDocs(eventsCollection);
      const eventData = eventSnapshot.docs.map(doc => doc.data());

      const attendees = eventData.reduce((acc, event) => {
        if (event.attendees && event.attendees.length > 0) {
          event.attendees.forEach(attendee => {
            acc.push({
              email: attendee,
              name: attendee.split('@')[0], // Assuming name from email, adjust as needed
            });
          });
        }
        return acc;
      }, []);
      
      setDeltagare(attendees);
      setLoading(false);
    };

    fetchAttendees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <Table className="w-full border border-gray-300 shadow-lg rounded-lg">
        <TableCaption className="text-lg font-semibold bg-gray-100 p-2 rounded-t-lg">Deltagarlista</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="p-2">Namn</TableHead>
            <TableHead className="p-2">E-post</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deltagare && deltagare.length > 0 ? (
            deltagare.map((deltagare, index) => (
              <TableRow key={index}>
                <TableCell className="p-4">{deltagare.name}</TableCell>
                <TableCell className="p-4">{deltagare.email}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="2" className="p-4 text-center">Inga deltagare hittades.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeltagerList;
