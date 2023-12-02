import { Browser, Calendar, Export, MapPin, Timer } from 'phosphor-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { bubbles } from '../../data/bubbles';
import { Category } from '../../enums/category';
import Search from '../Search';
import Button from '../common/Button';
import { Event } from '../common/Event';
import Input from '../common/Fields/Input';
import Select from '../common/Fields/Select';
import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';

function SearchEvents() {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [eventType, setEventType] = useState('presencial');

  const bubblesOptions = bubbles(12).map((bubbles) => {
    return { label: bubbles.name, value: bubbles.category };
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const createEvent = (data: any) => {
    console.log('👽 ~ data:', data);
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
                  {...register('name', {
                    required: 'Não esqueça o nome do evento',
                  })}
                  helperText={errors?.name?.message}
                />
              </div>

              <div className="w-2/5">
                <Select
                  label="Selecione uma categoria:"
                  color="bg-zinc-100/70"
                  options={bubblesOptions}
                  {...register('category', {
                    required: 'Selecione a categoria',
                  })}
                  onChange={(e) => {
                    register('category').onChange(e);
                  }}
                  helperText={errors?.category?.message}
                />
              </div>
            </div>

            <div className="w-full flex justify-between items-center gap-8">
              <Select
                label="Selecione a bolha:"
                color="bg-zinc-100/70"
                options={bubblesOptions}
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
              <div className="w-3/6">
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

              <div className="w-[8.5rem]">
                <Input
                  label="Data do evento:"
                  type="date"
                  icon={<Calendar size={16} color="#71717A" weight="duotone" />}
                  placeholder="Endereço"
                  color="bg-zinc-100/70"
                  {...register('date', {
                    required: 'Data não informada',
                  })}
                  helperText={errors?.date?.message}
                />
              </div>

              <div className="w-1/6">
                <Input
                  label="Hora:"
                  type="time"
                  icon={<Timer size={16} color="#71717A" weight="duotone" />}
                  placeholder="Endereço"
                  color="bg-zinc-100/70"
                  {...register('time', {
                    required: 'Informe a hora',
                  })}
                  helperText={errors?.time?.message}
                />
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
      >
        <Event.Card
          title="Festa na Casa das Primas"
          category={Category.TECHNOLOGY}
          bubble={{ name: 'Bailão' }}
          address="ai 123"
          image="https://picsum.photos/200/300"
        />
      </Search>
    </>
  );
}

export default SearchEvents;
