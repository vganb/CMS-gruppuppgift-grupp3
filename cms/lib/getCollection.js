
import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export async function getEvents() {
  try {
    const eventsCollection = collection(db, 'events');
    const querySnapshot = await getDocs(eventsCollection);
    const eventsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return eventsData;
  } catch (error) {
    console.error("Error fetching events: ", error);
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

