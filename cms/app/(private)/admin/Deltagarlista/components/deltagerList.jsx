import { useAuth } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

function DeltagerList() {
  const { userId } = useAuth();
  const [deltagare, setDeltagare] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeltagare = async () => {
      try {
        // Hämta användarinformation från Clerk
        const { data } = await fetch('/api/getDeltagare');
        setDeltagare(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching deltagare:', error);
      }
    };

    fetchDeltagare();
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
            <TableHead className="p-2">Bild</TableHead>
            <TableHead className="p-2">Namn</TableHead>
            <TableHead className="p-2">E-post</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deltagare && deltagare.length > 0 ? (
            deltagare.map((deltagare) => (
              <TableRow key={deltagare.id}>
                <TableCell className="p-2">
                  <img src={deltagare.image} alt={deltagare.name} className="w-16 h-16 object-cover rounded-full" />
                </TableCell>
                <TableCell className="p-2">{deltagare.name}</TableCell>
                <TableCell className="p-2">{deltagare.email}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="3" className="p-4 text-center">Inga deltagare hittades.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DeltagerList;
