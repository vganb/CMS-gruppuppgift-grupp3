'use client'

import DeltagerList from './components/deltagerList';

const DeltagarPage = () => {
    
  return (
    <div>
        <DeltagerList/>
    </div>
  );
};

export default DeltagarPage;






/*'use client'

import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import useDeltagarData from '@/lib/usePageData';


const DeltagarPage = () => {
    const { user } = useAuth();
    const [deltagare, setDeltagare] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deltagareData = await useDeltagarData(); // Anropa funktionen för att hämta deltagarinformation
                setDeltagare(deltagareData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching deltagare:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {deltagare && deltagare.length > 0 ? (
                deltagare.map((deltagareItem) => (
                    <div key={deltagareItem.id}>
                        <p>Namn: {deltagareItem.name}</p>
                        <p>E-post: {deltagareItem.email}</p>
                      
                    </div>
                ))
            ) : (
                <p>Inga deltagare hittades.</p>
            )}
        </div>
    );
};

export default DeltagarPage;*/
