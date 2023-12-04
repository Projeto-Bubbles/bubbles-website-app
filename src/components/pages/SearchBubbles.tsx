import axios from 'axios';
import { Export } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { bubbles } from '../../data/bubbles';
import useBubbles from '../../hooks/useBubbles';
import { BubbleProps } from '../../interfaces/bubble';
import { getFilteredBubbles } from '../../services/bubbleServices';
import { convertImageToBase64 } from '../../utils/imageConverter';
import Search from '../Search';
import { Bubble } from '../common/Bubble';
import Button from '../common/Button';
import Input from '../common/Fields/Input';
import Select from '../common/Fields/Select';
import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';

function SearchBubbles() {
  const bubblesTag = bubbles(12);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );
  const { selectedBubbles, toggleBubble } = useBubbles(userBubbles);

  const [isVisible, setIsVisible] = useState(false);
  const [bubblesList, setBubblesList] = useState<BubbleProps[]>([]);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const categories = selectedBubbles.map((bubble) => bubble.category);
    console.log('👽 ~ categories:', categories);

    getFilteredBubbles(categories)
      .then((response) => setBubblesList(response.data))
      .catch((err) => console.log(err));
  }, [selectedBubbles]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<BubbleProps>();

  const bubblesOptions = bubbles(12).map((bubbles) => {
    return { label: bubbles.name, value: bubbles.category };
  });

  const createBubble = async (data: BubbleProps) => {
    try {
      const imageBase64 = await convertImageToBase64(image as File);
      const bubbleData = { ...data, image: imageBase64 };

      const response = await axios.post(
        'http://localhost:3000/bubbles',
        bubbleData
      );

      // Verifica se a resposta foi bem-sucedida
      if (response.status === 201) {
        // Bolha criada com sucesso
        console.log('Bolha criada com sucesso!');
      } else {
        console.error('Erro ao criar a bolha.');
      }
    } catch (error) {
      console.error('Erro durante o processo de criação da bolha:', error);
    }

    setIsVisible(false);
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
            onSubmit={handleSubmit(createBubble)}
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
                  alt="Imagem da bolha"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Export size={32} weight="duotone" color="#6b7280" />
                  <h1 className="text-zinc-500 font-medium">
                    Arraste uma foto para a bolha
                  </h1>
                </>
              )}
            </div>

            <div className="w-full flex justify-between items-center gap-8">
              <div className="w-3/5">
                <Input
                  label="Nome da bolha:"
                  placeholder="Digite o nome da bolha"
                  color="bg-zinc-100/70"
                  {...register('name', {
                    required: 'Não esqueça o nome da bolha',
                  })}
                  helperText={errors?.name?.message}
                />
              </div>

              <div className="w-2/5">
                <Select
                  label="Selecione uma categoria"
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

            <Textarea
              label="Descrição da bolha"
              color="bg-zinc-100/70"
              {...register('description', {
                required: 'Coloque uma breve descrição',
              })}
              maxLength={100}
              helperText={errors?.description?.message}
            />

            <Button
              type="submit"
              text="Criar bolha"
              color="bg-green-500"
              disabled={!isValid}
              className="mt-10"
            />
          </form>
        </Modal>
      )}

      <Search
        title="Encontre suas bolhas favoritas aqui"
        placeholder="Pesquisar bolhas..."
        isOpenModal={() => setIsVisible(true)}
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

          <div className="w-full grid grid-cols-4 gap-12 place-content-items">
            {bubblesList.map((bubble, index) => (
              <Bubble.Card key={index} {...bubble} />
            ))}
          </div>
        </div>
      </Search>
    </>
  );
}

export default SearchBubbles;
