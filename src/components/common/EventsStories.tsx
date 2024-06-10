import { CalendarBlank } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { EventProps } from '../../interfaces/bubble';
import { getNext5Events } from '../../services/eventServices';
import Event from './Event';
import { Skeleton } from './Skeleton';

export function EventsStories() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        await getNext5Events().then((response) => {
          setEvents(response.data.slice(0, 5));

          setIsLoading(false);
        });
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="w-full mb-10">
      <div className="flex justify-start items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-zinc-200 flex justify-center items-center rounded-full p-1">
          <CalendarBlank size={16} color="#423F46" weight="duotone" />
        </div>
        <h1 className="text-zinc-600 font-bold text-xl leading-none">
          Próximos eventos
        </h1>
      </div>

      <div className="w-full h-72 flex justify-between items-center gap-2">
        {isLoading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <Skeleton.EventStory key={index} />
            ))}
          </>
        ) : (
          events.map((event, index) => <Event.Story key={index} {...event} />)
        )}
      </div>
    </div>
  );
}
