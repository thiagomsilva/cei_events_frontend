import React, { useEffect, useState } from 'react';
import { getEvents } from './services/eventsService';
import styles from './globals.css';

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Erro ao carregar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'var(--color-black)' }}>Eventos Disponíveis</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>Data: {event.date}</p>
            <p>Local: {event.location}</p>
            <p>Preço: {event.price ? `R$ ${event.price}` : 'Gratuito'}</p>
            <button>Inscreva-se</button>
          </div>
        ))}
      </div>
    </div>
  );
}
