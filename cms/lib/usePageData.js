'use client'

import { db } from "@/app/firebase.config";

// hämta data om deltagare från Firebase-databasen
const useDeltagarData = async () => {
  try {
    //  referens till 'deltagare' 
    const deltagareRef = db.collection('deltagare'); 

    // Hämta en snapshot av dokumenten 
    const deltagareSnapshot = await deltagareRef.get();
    
    const deltagareData = [];

    // Loopa igenom varje dokument i snapshoten
    deltagareSnapshot.forEach((doc) => {
      // Lägg till dokumentets id och data i den tomma arrayen

      deltagareData.push({ id: doc.id, ...doc.data() });
    });

    return deltagareData;
  } catch (error) {
    console.error('Error fetching deltagare data:', error);
    return null;
  }
};

export default useDeltagarData;
