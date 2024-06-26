import axios from 'axios';
import { Browser, Calendar, Export, MapPin } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
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
// import { getLocalUser } from '../../services/userServices';
import { getCoverEventsUrl, uploadFileEvents } from '../../utils/supabase';
import Search from '../Search';
import { Bubble } from '../common/Bubble';
import Button from '../common/Button';
import { Event } from '../common/Event';
import Input from '../common/Fields/Input';
import Select from '../common/Fields/Select';
// import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';
import Navbar from '../common/Navbar';
import { NotFoundItem } from '../common/NotFoundItem';
import { Skeleton } from '../common/Skeleton';

function SearchEvents() {
  const bubblesTag = bubbles(12);
  // const user: any = getLocalUser();

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );
  const { selectedBubbles, toggleBubble } = useBubbles(userBubbles);

  const [isVisible, setIsVisible] = useState(false);
  const [eventType, setEventType] = useState('presencial');
  const [address, setAddress] = useState<any>({});
  const [coverUrl, setEventCoverUrl] = useState('');

  const [bubbleOptions, setBubblesOptions] = useState<
    {
      label: string;
      value: number | undefined;
    }[]
  >([]);

  const [eventsList, setEventsList] = useState<EventProps[]>([]);
  const [eventsDefault, setEventsDefault] = useState<EventProps[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<EventProps>();

  const handleSearchEvents = (e: any) => {
    const searchEvent = e.target.value.toLowerCase();

    if (searchEvent === '') {
      setEventsList(eventsDefault);
    } else {
      const searchEvents = eventsDefault.filter((event) =>
        event.title.toLowerCase().includes(searchEvent)
      );

      setEventsList(searchEvents);
    }
  };

  const getEvents = (categories: (Category | undefined)[]) => {
    getFilteredEvents(categories).then((response) => {
      setEventsList(response.data);
      setEventsDefault(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getBubbles().then((response: any) => {
      const bubbleData = response.data.map((bubble: BubbleProps) => ({
        label: bubble.title,
        value: bubble?.idBubble,
      }));

      setBubblesOptions(bubbleData);
    });
  }, []);

  useEffect(() => {
    const categories = selectedBubbles.map((bubble) => bubble.category);

    getEvents(categories);
  }, [selectedBubbles]);

  const createEvent = async (data: EventProps) => {
    const categories = selectedBubbles.map((bubble) => bubble.category);
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const eventData = {
      title: data.title,
      duration: 90,
      image: coverUrl,
      dateTime: data.dateTime,
      idCreator: user.id,
      idBubble: data.bubble,
    };

    if (eventType === 'presencial') {
      const cep = data.address?.cep.replace(/\D/g, '');

      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          setAddress(response.data);

          const houseNumber = data.address?.houseNumber.replace(/\D/g, '');

          const eventInPersonData = {
            ...eventData,
            publicPlace: true,
            peopleCapacity: 100,
            address: {
              cep,
              estate: address.uf,
              city: address.localidade,
              neighborhood: address.bairro,
              street: address.logradouro,
              houseNumber,
            },
          };

          toast.promise(
            createInPersonEvent(eventInPersonData).then(() => {
              getEvents(categories);
              setIsVisible(false);
            }),
            {
              loading: '🫧 Criando evento...',
              success: 'Evento criado com sucesso!',
              error: 'Ops, tente criar a evento novamente',
            }
          );
        })
        .catch(() => {
          toast.error('CEP não encontrado');
        });
    }

    if (eventType === 'online') {
      const eventOnlineData = {
        ...eventData,
        link: data.link,
        platform: data.platform,
      };

      toast.promise(
        createOnlineEvent(eventOnlineData).then(() => {
          getEvents(categories);
          setIsVisible(false);
        }),
        {
          loading: '🫧 Criando evento...',
          success: 'Evento criado com sucesso!',
          error: 'Ops, tente criar a evento novamente',
        }
      );
    }
    reset();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const filePath = await uploadFileEvents(file);
      const url = await getCoverEventsUrl(filePath);
      setEventCoverUrl(url);
    }
  };

  return (
    <>
      <Navbar redirectPage="/feed" isLogged />
      <Toaster />

      {isVisible && (
        <Modal onClose={() => setIsVisible(false)}>
          <form
            onSubmit={handleSubmit(async (data) => {
              if (coverUrl) {
                await createEvent(data);
              } else {
                toast.error(
                  'Por favor, carregue uma imagem antes de criar o evento.'
                );
              }
            })}
            className="w-full flex flex-col gap-8"
          >
            <label htmlFor="event-upload" className="cursor-pointer">
              <div
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
                className="w-full h-60 flex flex-col justify-center items-center gap-4 rounded-md border-dotted border-2 border-zinc-500 overflow-hidden"
              >
                {coverUrl ? (
                  <img
                    src={coverUrl}
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
            </label>
            <input
              id="event-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleOnDrop}
            />

            <div className="w-full flex justify-between items-center gap-8">
              <div className="w-3/5">
                <Input
                  label="Nome do evento:"
                  placeholder="Digite o nome do evento"
                  color="bg-zinc-100/70"
                  {...register('title', {
                    required: 'Não esqueça o nome do evento',
                  })}
                  helperText={errors?.title?.message}
                />
              </div>

              <div className="w-2/5">
                <Input
                  label="Data do evento:"
                  type="datetime-local"
                  icon={<Calendar size={16} color="#71717A" weight="duotone" />}
                  placeholder="12/12/12"
                  color="bg-zinc-100/70"
                  {...register('dateTime', {
                    required: 'Data não informada',
                  })}
                  helperText={errors?.dateTime?.message}
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
                    {...register('address.houseNumber', {
                      required: 'Endereço não informado',
                    })}
                    helperText={errors?.address?.houseNumber?.message}
                  />
                ) : (
                  <Input
                    label="Insira a URL:"
                    icon={
                      <Browser size={16} color="#71717A" weight="duotone" />
                    }
                    placeholder="URL"
                    color="bg-zinc-100/70"
                    {...register('link', {
                      required: 'URL não informado',
                    })}
                    helperText={errors?.link?.message}
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
                    {...register('address.cep', {
                      required: 'Informe o cep',
                    })}
                    helperText={errors?.address?.cep?.message}
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
                    helperText={errors?.link?.message}
                  />
                )}
              </div>
            </div>

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
                  title={tag.title}
                  color={tag.color}
                  selected={userBubbles.some(
                    (bubble) => bubble.title === tag.title
                  )}
                />
              </div>
            ))}
          </div>

          {isLoading || eventsList.length > 0 ? (
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-items">
              {isLoading ? (
                <>
                  {[...Array(6)].map((_, index) => (
                    <Skeleton.EventCard key={index} />
                  ))}
                </>
              ) : (
                eventsList.map((event) => (
                  <Event.Card
                    key={event.idEvent}
                    idEvent={event.idEvent}
                    title={event.title}
                    image={event.image}
                    bubble={event.bubble}
                    address={event.address}
                    link={event.link}
                    platform={event.platform}
                    dateTime={event.dateTime}
                    duration={event.duration}
                  />
                ))
              )}
            </div>
          ) : (
            <NotFoundItem
              errorMessage="Esse evento ainda não existe 🙁"
              disclaimer="Que tal criar ou participar de um?"
            />
          )}
        </div>
      </Search>
    </>
  );
}

export default SearchEvents;
