import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { bubbles } from '../../data/bubbles';
import { BubbleProps } from '../../interfaces/bubble';
import Search from '../Search';
import { Bubble } from '../common/Bubble';
import Button from '../common/Button';
import Input from '../common/Fields/Input';
import Select from '../common/Fields/Select';
import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';

function SearchBubbles() {
  const [isVisible, setIsVisible] = useState(false);
  const [bubblesList, setBubblesList] = useState<BubbleProps[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/bubbles')
      .then((response) => setBubblesList(response.data))
      .catch((err) => console.log(err));
  }, []);

  const bubblesOptions = bubbles(12).map((bubbles) => {
    return { label: bubbles.name, value: bubbles.category };
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const createBubble = (data: any) => {
    data = { ...data, creationDate: new Date().toISOString() };
    console.log('👽 ~ data:', data);

    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Modal onClose={() => setIsVisible(false)}>
          <form
            onSubmit={handleSubmit(createBubble)}
            className="w-full flex flex-col gap-8"
          >
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
        {bubblesList.map((bubble) => (
          <Bubble.Card {...bubble} />
        ))}
      </Search>
    </>
  );
}

export default SearchBubbles;
