import { EventProps } from '../../../interfaces/bubble';
import { formatter } from '../../../utils/dateFormatter';

function EventStory({ title, dateTime, image, bubble }: EventProps) {
  if (typeof dateTime === 'string') {
    dateTime = new Date(dateTime);
  }
  
  if (!(dateTime instanceof Date) || isNaN(dateTime.getTime())) {
    console.error('dateTime não é uma data válida:', dateTime);
    return null;
  }

  return (
    <div
      role="event-story"
      aria-label="Event story"
      className="h-full w-28 bg-black flex flex-col justify-center items-end transition-all duration-500 ease-in-out rounded-full relative overflow-hidden hover:w-36 group"
    >
      <img
        role="event-img"
        aria-label="Event image"
        src={image}
        alt={`Image of ${title}}`}
        className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
      />
      <div className="bg-gradient-to-t from-slate-900 to-black/5 flex flex-col justify-start items-start gap-2 text-slate-100 h-full p-4 pt-28 absolute">
        <div className="text-3xl font-bold leading-none">
          <h3>{formatter({ day: 'numeric' }, dateTime)}</h3>
          <h3 className="uppercase">
            {formatter({ month: 'long' }, dateTime).slice(0, 3)}
          </h3>
        </div>
        <h4 className="font-bold text-lg leading-none">{title}</h4>
        <h5 className="leading-none opacity-0 transition delay-300 duration-300 ease-in-out group-hover:opacity-100">
          {bubble?.title}
        </h5>
      </div>
    </div>
  );
}

export default EventStory;
