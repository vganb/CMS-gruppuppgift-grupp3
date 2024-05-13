
import { db } from "@/firebase.config";
// Importera Firestore-funktionerna collection och getDocs för att hantera databasinteraktioner
import { collection, getDocs } from "firebase/firestore";

// Funktion för att hämta evenemangsdata från Firestore-databasen
export async function getEvents() {
  try {
    // Skapa en referens 
    const eventsCollection = collection(db, 'events');
   
    const querySnapshot = await getDocs(eventsCollection);
    // Mappera varje dokument till ett objekt och returnera som en array
    const eventsData = querySnapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data() 
    }));
    
    return eventsData;
  } catch (error) {
    
    console.error("Error fetching events: ", error);
    // Om ett fel uppstår, logga felmeddelandet och returnera en tom array
    return [];
  }
}


/*import { db } from "@/firebase/config";
import { collection, getDocs, onSnapshot, q } from "firebase/firestore";

export default async function getCollection(collectionName) {

  const querySnapshot = await getDocs(collection(db, collectionName))

    const documents = []
    
    querySnapshot.forEach(doc => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    
    return documents
}*/

