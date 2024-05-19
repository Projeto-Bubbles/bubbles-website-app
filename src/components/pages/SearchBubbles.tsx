import { Export, Pencil, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { bubbles } from '../../data/bubbles';
import useBubbles from '../../hooks/useBubbles';
import { BubbleProps } from '../../interfaces/bubble';
import {
  createBubble,
  deleteBubble,
  editBubble,
  getFilteredBubbles,
} from '../../services/bubbleServices';
import { getLocalUser } from '../../services/userServices';
import Search from '../Search';
import { Bubble } from '../common/Bubble';
import Button from '../common/Button';
import Input from '../common/Fields/Input';
import Select from '../common/Fields/Select';
import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';
import Navbar from '../common/Navbar';

function SearchBubbles() {
  const user: any = getLocalUser();
  const [currentContent, setCurrentContent] = useState<string | undefined>();

  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  const [postId, setPostId] = useState(0);

  const bubblesTag = bubbles(12);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );
  const { selectedBubbles, toggleBubble } = useBubbles(userBubbles);

  const [isVisible, setIsVisible] = useState(false);
  const [bubblesList, setBubblesList] = useState<BubbleProps[]>([]);
  const [bubblesDefault, setBubblesDefault] = useState<BubbleProps[]>([]);

  const [image, setImage] = useState<File | null>(null);

  const handleSearchBubbles = (e: any) => {
    const searchBubble = e.target.value.toLowerCase();

    if (searchBubble === '') {
      setBubblesList(bubblesDefault);
    } else {
      const searchBubbles = bubblesDefault.filter((bubble) =>
        bubble.title.toLowerCase().includes(searchBubble)
      );

      setBubblesList(searchBubbles);
    }
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<BubbleProps>();

  const bubblesOptions = bubbles(12).map((bubbles) => {
    return { label: bubbles.title, value: bubbles.category };
  });

  const createNewBubble = (data: BubbleProps) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const bubbleData = {
      ...data,
      creator: user.id,
    };

    toast.promise(
      createBubble(bubbleData).then(() => {
        getBubbles();
      }),
      {
        loading: '🫧 Criando bolha...',
        success: 'Bolha criada com sucesso!',
        error: 'Ops, tente criar a bolha novamente',
      }
    );

    setIsVisible(false);
  };

  const getBubbles = () => {
    const categories = selectedBubbles.map((bubble) => bubble.category);

    getFilteredBubbles(categories).then((response) => {
      const bubbleListMapped: BubbleProps[] = response.data.map(
        (bubble: BubbleProps) => {
          bubble.users = Math.floor(Math.random() * (100 - 10 + 1) + 10);
          return bubble;
        }
      );

      setBubblesList(bubbleListMapped);
      setBubblesDefault(bubbleListMapped);
    });
  };

  useEffect(() => {
    getBubbles();
  }, [selectedBubbles]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const handleEditBubble = (bubbleId: number, newContent: string) => {
    toast((t) => (
      <span>
        Deseja realmente editar a bolha?
        <div className="flex justify-center items-center gap-2 my-2">
          <Button
            text="Editar"
            color="bg-green-500"
            onClick={() => {
              toast.promise(
                editBubble(bubbleId, newContent).then(() => {
                  getBubbles();
                }),
                {
                  loading: 'Editando bolha...',
                  success: 'Bolha editada com sucesso!',
                  error: 'Não foi possível editar a bolha, tente novamente',
                }
              );
            }}
          />

          <Button
            text="Cancelar"
            color="bg-red-500"
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
      </span>
    ));
  };

  const onEdit = (postId: number, content: string) => {
    setIsVisibleEdit(true);
    setPostId(postId);
    setCurrentContent(content);
  };

  const onDelete = (id: number) => {
    toast((t) => (
      <span>
        Deseja realmente excluir a bolha?
        <div className="flex justify-center items-center gap-2 my-2">
          <Button
            text="Excluir"
            color="bg-green-500"
            onClick={() => {
              toast.promise(
                deleteBubble(id).then(() => {
                  getBubbles();
                }),
                {
                  loading: 'Excluindo bolha...',
                  success: 'Bolha excluída com sucesso!',
                  error: 'Não foi possível excluir a bolha, tente novamente',
                }
              );
            }}
          />

          <Button
            text="Cancelar"
            color="bg-red-500"
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
      </span>
    ));
  };

  const handleTextarea = (e: any) => {
    setCurrentContent(e.target.value);
  };

  return (
    <>
      <Toaster />

      {isVisibleEdit ? (
        <Modal onClose={() => setIsVisibleEdit(false)}>
          <div className="w-full flex flex-col justify-start item-center gap-4">
            <h1 className="text-zinc-700 font-medium text-lg">
              Editar nome da bolha
            </h1>
            <Textarea
              value={currentContent}
              onChange={handleTextarea}
              color="bg-zinc-100/70"
            />
            <Button
              text="Editar"
              icon={<Pencil size={16} color="#334141" weight="duotone" />}
              color="bg-green-600"
              type="submit"
              onClick={() => handleEditBubble(postId, currentContent ?? '')}
            />
          </div>
        </Modal>
      ) : (
        <>
          <Navbar redirectPage="/feed" isLogged />

          {isVisible && (
            <Modal onClose={() => setIsVisible(false)}>
              <form
                onSubmit={handleSubmit(createNewBubble)}
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
                      {...register('title', {
                        required: 'Não esqueça o nome da bolha',
                      })}
                      helperText={errors?.title?.message}
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
                  {...register('explanation', {
                    required: 'Coloque uma breve descrição',
                  })}
                  maxLength={100}
                  helperText={errors?.explanation?.message}
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
            onChange={handleSearchBubbles}
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

              <div className="w-full grid grid-cols-4 gap-12 place-content-items">
                {bubblesList.map((bubble, index) => (
                  <div
                    key={index}
                    className="h-full flex justify-center items-start gap-1"
                  >
                    <Bubble.Card
                      {...bubble}
                      users={bubble.users}
                      image={`https://source.unsplash.com/random/500x500/?${bubble.category}`}
                    />

                    {bubble?.creator?.idUser === user.id && (
                      <div className="bg-zinc-300 w-5 flex flex-col justify-center items-center gap-2 rounded-md">
                        <span
                          onClick={() =>
                            onEdit(bubble.idBubble ?? 0, bubble.title)
                          }
                          role="editar"
                          className="w-full text-zinc-700 flex justify-center items-center gap-2 px-1 py-[2px] rounded-md transition duration-200 ease-in-out cursor-pointer hover:bg-zinc-400/20"
                        >
                          <Pencil size={16} color="#334141" weight="duotone" />
                        </span>
                        <span
                          onClick={() => onDelete(bubble.idBubble ?? 0)}
                          role="excluir"
                          className="w-full text-zinc-700 flex justify-center items-center gap-2 px-1 py-[2px] rounded-md transition duration-200 ease-in-out cursor-pointer hover:bg-slate-400/20"
                        >
                          <Trash size={16} color="#334141" weight="duotone" />
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Search>
        </>
      )}
    </>
  );
}

export default SearchBubbles;
