

/*import { addEvent } from "@/lib/getCollection";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const eventData = req.body; // Hämta evenemangsdata från förfrågan
      const eventId = await addEvent(eventData); // Lägg till evenemang i databasen
      return res.status(200).json({ id: eventId }); // Returnera evenemangs-ID som JSON
    } catch (error) {
      console.error('Error adding event:', error);
      return res.status(500).json({ error: 'Error adding event' }); // Returnera felmeddelande om något går fel
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' }); // Returnera felmeddelande om metoden inte är tillåten
  }
}*/
