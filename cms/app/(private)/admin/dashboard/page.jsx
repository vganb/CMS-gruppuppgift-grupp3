import React from 'react';

const events = [
  {
    id: 1,
    title: 'Event 1',
    date: 'May 20, 2024',
    city: 'Event Venue 1',
    description: 'Description of Event 1...',
    image: 'https://example.com/image1.jpg'
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'June 5, 2024',
    city: 'Event Venue 2',
    description: 'Description of Event 2...',
    image: 'https://example.com/image2.jpg'
  },
  {
    id: 3,
    title: 'Event 3',
    date: 'June 5, 2024',
    city: 'Event Venue 2',
    description: 'Description of Event 2...',
    image: 'https://example.com/image2.jpg'
  }, 
  {
    id: 4,
    title: 'Event 3',
    date: 'June 5, 2024',
    city: 'Event Venue 2',
    description: 'Description of Event 2...',
    image: 'https://example.com/image2.jpg'
  },
  {
    id: 5,
    title: 'Event 3',
    date: 'June 5, 2024',
    city: 'Event Venue 2',
    description: 'Description of Event 2...',
    image: 'https://example.com/image2.jpg'
  },
  {
    id: 6,
    title: 'Event 3',
    date: 'June 5, 2024',
    city: 'Event Venue 2',
    description: 'Description of Event 2...',
    image: 'https://example.com/image2.jpg'
  },
  

];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Kommande events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
           
            <div className="absolute top-0 right-0 p-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2">
                Ändra
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                Ta bort
              </button>
            </div>
            
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Location:</span> {event.city}
              </p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">
                Läs mer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;