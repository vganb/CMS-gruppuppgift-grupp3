

import getEvents from "@/lib/getCollection";

; // Importera funktionen för att hämta evenemang

export default async function handler(req , res) {
  if (req.method === 'GET') {
    try {
      const events = await getEvents(); // Hämta evenemang från databasen
      return res.status(200).json(events); // Returnera evenemangen som JSON
    } catch (error) {
      console.error('Error fetching events:', error);
      return res.status(500).json({ error: 'Error fetching events' }); // Returnera felmeddelande om något går fel
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' }); // Returnera felmeddelande om metoden inte är tillåten
  }
}
  