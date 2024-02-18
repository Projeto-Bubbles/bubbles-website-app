import { Browser, Calendar, CheckCircle, Export, MapPin } from 'phosphor-react';
import { ReactNode, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { bubbles } from '../../data/bubbles';
import { Category } from '../../enums/category';
import useBubbles from '../../hooks/useBubbles';
import { BubbleProps, EventProps } from '../../interfaces/bubble';
import { getBubbles } from '../../services/bubbleServices';
import {
  createInPersonEvent,
  createOnlineEvent,
  getFilteredEvents,
} from '../../services/eventServices';
import Search from '../Search';
import { Bubble } from '../common/Bubble';
import Button from '../common/Button';
import { Event } from '../common/Event';
import Input from '../common/Fields/Input';
import Select from '../common/Fields/Select';
import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';
import Navbar from '../common/Navbar';

function SearchEvents() {
  const bubblesTag = bubbles(12);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );
  const { selectedBubbles, toggleBubble } = useBubbles(userBubbles);

  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [eventType, setEventType] = useState('presencial');

  const [bubbleOptions, setBubblesOptions] = useState([]);

  const [eventsList, setEventsList] = useState<EventProps[]>([]);
  const [eventsDefault, setEventsDefault] = useState<EventProps[]>([]);
  const [isCheckIcon, setCheckIcon] = useState<ReactNode>(null);

  const [attendedEvents, setAttendedEvents] = useState<EventProps[]>([]);

  const setPresenceInEvent = (event: EventProps) => {
    const isAttended = attendedEvents.some((e) => e.id === event.id);

    if (!isAttended) {
      setAttendedEvents([...attendedEvents, event]);
    } else {
      const updatedAttendedEvents = attendedEvents.filter(
        (e) => e.id !== event.id
      );
      setAttendedEvents(updatedAttendedEvents);
    }
  };

  useEffect(() => {
    console.log('👽 ~ attendedEvents:', attendedEvents);
  }, [attendedEvents]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm();

  const handleSearchEvents = (e: any) => {
    console.log('👽 ~ e.target.value:', e.target.value);
    const searchEvent = e.target.value.toLowerCase();

    if (searchEvent === '') {
      setEventsList(eventsDefault);
    } else {
      console.log(eventsDefault);

      const searchEvents = eventsDefault.filter((event) =>
        event.title.toLowerCase().includes(searchEvent)
      );

      setEventsList(searchEvents);

      if (searchEvents.length === 0) {
        console.log('Nenhum evento encontrado.');
      }
    }
  };

  const getEvents = (categories: (Category | undefined)[]) => {
    getFilteredEvents(categories)
      .then((response) => {
        // Atualize tanto a lista padrão quanto a lista atual com a nova resposta
        setEventsList(response.data);
        setEventsDefault(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBubbles().then((response) => {
      const sortedBubbles = response.data.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );

      const bubbleData = sortedBubbles.map((bubble: any) => ({
        label: bubble.name,
        value: bubble.id,
      }));
      setBubblesOptions(bubbleData);
    });
  }, []);

  useEffect(() => {
    const categories = selectedBubbles.map((bubble) => bubble.category);

    getEvents(categories);
  }, [selectedBubbles]);

  const createEvent = (data: any) => {
    const categories = selectedBubbles.map((bubble) => bubble.category);
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const eventData = {
      title: data.title,
      duration: 90,
      date: data.date,
      author: { id: user.id },
      bubble: { id: data.bubble },
    };

    if (eventType === 'presencial') {
      const eventInPersonData = {
        ...eventData,
        publicPlace: true,
        peopleCapacity: 100,
        address: { id: 1 },
      };

      createInPersonEvent(eventInPersonData)
        .then(() => {
          alert('📅 Evento criado com sucesso!');
          getEvents(categories);
          setIsVisible(false);
        })
        .catch((err) => console.error(err));
    }

    if (eventType === 'online') {
      const eventOnlineData = {
        ...eventData,
        url: data.url,
        platform: data.platform,
      };
      console.log('👽 ~ eventOnlineData:', eventOnlineData);

      createOnlineEvent(eventOnlineData)
        .then(() => {
          alert('📅 Evento criado com sucesso!');
          getEvents(categories);
          setIsVisible(false);
        })
        .catch((err) => console.error(err));
    }

    reset();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
      <Navbar redirectPage="/feed" isLogged />

      {isVisible && (
        <Modal onClose={() => setIsVisible(false)}>
          <form
            onSubmit={handleSubmit(createEvent)}
            className="w-full flex flex-col gap-8"
          >
            <div
              onDragOver={handleDragOver}
              onDrop={handleOnDrop}
              className="w-full h-60 flex flex-col justify-center items-center gap-4 rounded-md border-dotted border-2 border-zinc-500 overflow-hidden"
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Imagem do evento"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Export size={32} weight="duotone" color="#6b7280" />
                  <h1 className="text-zinc-500 font-medium">
                    Arraste uma foto para o evento
                  </h1>
                </>
              )}
            </div>

            <div className="w-full flex justify-between items-center gap-8">
              <div className="w-3/5">
                <Input
                  label="Nome do evento:"
                  placeholder="Digite o nome do evento"
                  color="bg-zinc-100/70"
                  {...register('title', {
                    required: 'Não esqueça o nome do evento',
                  })}
                  helperText={errors?.name?.message}
                />
              </div>

              <div className="w-2/5">
                <Input
                  label="Data do evento:"
                  type="datetime-local"
                  icon={<Calendar size={16} color="#71717A" weight="duotone" />}
                  placeholder="12/12/12"
                  color="bg-zinc-100/70"
                  {...register('date', {
                    required: 'Data não informada',
                  })}
                  helperText={errors?.date?.message}
                />
              </div>
            </div>

            <div className="w-full flex justify-between items-center gap-8">
              <Select
                label="Selecione a bolha:"
                color="bg-zinc-100/70"
                options={bubbleOptions}
                {...register('bubble', {
                  required: 'Selecione uma bolha',
                })}
                onChange={(e) => {
                  register('bubble').onChange(e);
                }}
                helperText={errors?.bubble?.message}
              />

              <div className="w-2/5 flex flex-col justify-center items-start g">
                <label className="font-medium text-zinc-700 mb-1">
                  Tipo do evento:
                </label>

                <div className="flex justify-start items-center gap-4">
                  <input
                    type="radio"
                    value="presencial"
                    checked={eventType === 'presencial'}
                    onChange={() => setEventType('presencial')}
                  />
                  <label className="font-medium text-zinc-700">
                    Presencial
                  </label>
                </div>

                <div className="flex justify-start items-center gap-4">
                  <input
                    type="radio"
                    value="online"
                    checked={eventType === 'online'}
                    onChange={() => setEventType('online')}
                  />
                  <label className="font-medium text-zinc-700">Online</label>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between items-center gap-8">
              <div className="w-4/6">
                {eventType === 'presencial' ? (
                  <Input
                    label="Digite o endereço:"
                    icon={<MapPin size={16} color="#71717A" weight="duotone" />}
                    placeholder="Endereço"
                    color="bg-zinc-100/70"
                    {...register('address', {
                      required: 'Endereço não informado',
                    })}
                    helperText={errors?.address?.message}
                  />
                ) : (
                  <Input
                    label="Insira a URL:"
                    icon={
                      <Browser size={16} color="#71717A" weight="duotone" />
                    }
                    placeholder="URL"
                    color="bg-zinc-100/70"
                    {...register('url', {
                      required: 'URL não informado',
                    })}
                    helperText={errors?.url?.message}
                  />
                )}
              </div>

              <div className="w-2/6">
                {eventType === 'presencial' ? (
                  <Input
                    label="CEP:"
                    icon={<MapPin size={16} color="#71717A" weight="duotone" />}
                    placeholder="XXXXX-XXX"
                    color="bg-zinc-100/70"
                    {...register('cep', {
                      required: 'Informe o cep',
                    })}
                    helperText={errors?.address?.message}
                  />
                ) : (
                  <Input
                    label="Plataforma:"
                    icon={
                      <Browser size={16} color="#71717A" weight="duotone" />
                    }
                    placeholder="Discord, Google Meet, Teams, COD"
                    color="bg-zinc-100/70"
                    {...register('platform', {
                      required: 'Insira a plataforma',
                    })}
                    helperText={errors?.url?.message}
                  />
                )}
              </div>
            </div>

            <Textarea
              label="Descrição do evento"
              color="bg-zinc-100/70"
              {...register('description', {
                required: 'Coloque uma breve descrição',
              })}
              maxLength={100}
              helperText={errors?.description?.message}
            />

            <Button
              type="submit"
              text="Criar evento"
              color="bg-green-500"
              disabled={!isValid}
              className="mt-10"
            />
          </form>
        </Modal>
      )}

      <Search
        title="Se junte com a galera!"
        placeholder="Pesquisar eventos..."
        isOpenModal={() => setIsVisible(true)}
        onChange={handleSearchEvents}
      >
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center gap-4">
            {bubblesTag.map((tag, index) => (
              <div
                key={index}
                onClick={() => {
                  toggleBubble(tag);
                }}
              >
                <Bubble.Tag
                  icon={tag.icon}
                  name={tag.name}
                  color={tag.color}
                  selected={userBubbles.some(
                    (bubble) => bubble.name === tag.name
                  )}
                />
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-3 gap-12 place-content-items">
            {eventsList &&
              eventsList.map((event) => (
                <Event.Card
                  key={event.id}
                  title={event.title}
                  bubble={event.bubble}
                  address={event.address}
                  url={event.url}
                  platform={event.platform}
                  date={event.date}
                  duration={event.duration}
                  image={`https://source.unsplash.com/random/500x500/?${event.bubble?.category}`}
                >
                  <Button
                    onClick={() => setPresenceInEvent(event)}
                    text={
                      attendedEvents.some((e) => e.id === event.id)
                        ? ''
                        : 'MARCAR PRESENÇA'
                    }
                    color={
                      attendedEvents.some((e) => e.id === event.id)
                        ? 'bg-green-500'
                        : 'bg-zinc-300'
                    }
                    icon={
                      attendedEvents.some((e) => e.id === event.id) ? (
                        <CheckCircle
                          size={16}
                          color="#F1F5F9"
                          weight="duotone"
                        />
                      ) : null
                    }
                  />
                </Event.Card>
              ))}
          </div>
        </div>
      </Search>
    </>
  );
}

export default SearchEvents;
