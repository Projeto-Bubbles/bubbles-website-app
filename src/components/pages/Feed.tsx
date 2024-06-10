import {
  ArrowLeft,
  CalendarBlank,
  ChatsTeardrop,
  Compass,
  Export,
  PaperPlaneRight,
  Pencil,
  Trash,
  User,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { EventProps } from '../../interfaces/bubble';
import { PostProps } from '../../interfaces/post';
import { getNext5Events } from '../../services/eventServices';
import {
  createComment,
  createPost,
  deletePost,
  editPost,
  getPosts,
} from '../../services/postServices';
import Button from '../common/Button';
import Input from '../common/Fields/Input';
import Textarea from '../common/Fields/Textarea';
import Modal from '../common/Modal';
import Navbar from '../common/Navbar';
import { Post } from '../common/Post';
import { PostType } from '../common/Post/PostRoot';
import SidebarTopic from '../common/SidebarTopic';
import { Skeleton } from '../common/Skeleton';
import Event from './../common/Event/index';
import { uploadFilePosts, getFileUrl } from '../../utils/supabase';

function Feed() {
  localStorage.setItem('previousPage', 'feed');

  const [currentContent, setCurrentContent] = useState<string | undefined>();

  const [isVisible, setIsVisible] = useState(false);

  const [postId, setPostId] = useState(0);

  const [coverUrl, setCoverUrl] = useState('');

  const [posts, setPosts] = useState<PostProps[]>([]);

  const user = JSON.parse(localStorage.getItem('user') ?? '{}');

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const getAllPosts = () => {
    getPosts().then((response) => setPosts(response.data));
  };

  const handleCreatePost = (image: string, contents: string) => {
    const post: any = {
      dateTime: new Date(),
      image,
      contents,
      idAuthor: user.id,
      idBubble: 1,
    };

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [0]: '', // Limpa o valor apenas para o componente específico
    }));

    createPost(post).then(() => {
      toast.promise(
        getPosts().then((response) => setPosts(response.data)),
        {
          loading: 'Criando post...',
          success: 'Post criado com sucesso!',
          error: 'Não foi possível criar o post, tente novamente',
        }
      );
    });
  };

  const handleCreateComment = (content: string, postId: number) => {
    const comment: any = {
      dateTime: new Date(),
      content,
      idAuthor: user.id,
    };

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [postId]: '', // Limpa o valor apenas para o componente específico
    }));

    createComment(comment, postId).then(() => getAllPosts());
  };

  const handleValue = (e: React.KeyboardEvent<HTMLInputElement>, type: PostType, postId: number) => {
    if (e.key === 'Enter') {
      const content = e.currentTarget.value;

      if (content === '') return;

      if (type === PostType.CREATE) {
        handleCreatePost(coverUrl, content);
      }

      if (type === PostType.VIEW) {
        handleCreateComment(content, postId);
      }
    }
  };

  const handleTextarea = (e: any) => {
    setCurrentContent(e.target.value);
  };

  const handleEditPost = (postId: number, newContent: string) => {
    toast((t) => (
      <span>
        Deseja realmente editar o post?
        <div className="flex justify-center items-center gap-2 my-2">
          <Button
            text="Editar"
            color="bg-green-500"
            onClick={() => {
              editPost(postId, newContent)
                .then(() => {
                  toast.promise(
                    getPosts().then((response) => setPosts(response.data)),
                    {
                      loading: 'Editando post...',
                      success: 'Post editado com sucesso!',
                      error: 'Não foi possível editar o post, tente novamente',
                    }
                  );

                  toast.dismiss(t.id);

                  setIsVisible(false);
                })
                .catch((error) => console.error(error));
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
    setIsVisible(true);
    setPostId(postId);
    setCurrentContent(content);
  };

  const onDelete = (id: number) => {
    toast((t) => (
      <span>
        Deseja realmente editar o post?
        <div className="flex justify-center items-center gap-2 my-2">
          <Button
            text="Excluir"
            color="bg-green-500"
            onClick={() => {
              deletePost(id)
                .then(() => {
                  toast.promise(
                    getPosts().then((response) => setPosts(response.data)),
                    {
                      loading: 'Excluindo post...',
                      success: 'Post excluído com sucesso!',
                      error: 'Não foi possível excluir o post, tente novamente',
                    }
                  );

                  toast.dismiss(t.id);

                  setIsVisible(false);
                })
                .catch((error) => console.error(error));
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

  useEffect(() => {
    getAllPosts();
  }, []);

  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getNext5Events();
        setEvents(response.data.slice(0, 5));
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = async (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const filePath = await uploadFilePosts(file);
      const url = await getFileUrl(filePath);
      setCoverUrl(url);
    }
  };

  return (
    <>
      <Toaster />

      {isVisible ? (
        <Modal onClose={() => setIsVisible(false)}>
          <div className="w-full flex flex-col justify-start item-center gap-4">
            <h1 className="text-zinc-700 font-medium text-lg">
              Editar conteúdo do post
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
              onClick={() => handleEditPost(postId, currentContent ?? '')}
            />
          </div>
        </Modal>
      ) : (
        <>
          <Navbar isLogged />

          <main className="min-h-screen bg-cover flex justify-start ">
            {/* Sidebar */}
            <div
              role="sidebar"
              className="h-screen flex flex-col justify-between items-left fixed pt-28 p-6"
            >
              <div className="flex flex-col gap-4">
                <Link to={'/account'}>
                  <SidebarTopic
                    icon={<User size={14} color="#423F46" weight="duotone" />}
                    text="Minha conta"
                  />
                </Link>

                <Link to={'/bubbles'}>
                  <SidebarTopic
                    icon={
                      <Compass size={14} color="#423F46" weight="duotone" />
                    }
                    text="Explorar bolhas"
                  />
                </Link>

                <Link to={'/my-bubbles'}>
                  <SidebarTopic
                    icon={
                      <ChatsTeardrop
                        size={14}
                        color="#423F46"
                        weight="duotone"
                      />
                    }
                    text="Minhas bolhas"
                  />
                </Link>

                <Link to={'/events'}>
                  <SidebarTopic
                    icon={
                      <CalendarBlank
                        size={14}
                        color="#423F46"
                        weight="duotone"
                      />
                    }
                    text="Eventos"
                  />
                </Link>
              </div>
              <div>
                <SidebarTopic
                  icon={
                    <ArrowLeft size={14} color="#B1C5E1" weight="duotone" />
                  }
                  text="Sair"
                  isLogout
                />
              </div>
            </div>

            {/* Feed Content */}
            <div className="w-5/12 min-h-screen m-auto flex flex-col justify-start items-center gap-10 pt-28">
              {/* Events */}
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
                  {events.map((event, index) => (
                    <Event.Story key={index} {...event} />
                  ))}
                </div>
              </div>

              {/* Post */}
              <div className="w-full flex flex-col gap-12">
                <Post.Root
                  type={user.email ? PostType.CREATE : PostType.NOT_LOGGED}
                >
                  {user.email && (
                    <Post.Header
                      image={user.image}
                      name={user.username}
                      username={user.nickname}
                    />
                  )}
                  <Post.Content
                    isNotLogged={!user.email}
                    content="Compartilhe seu momento com a bubbles! 🫧"
                  />
                  <label htmlFor="post-upload" className="cursor-pointer">
                    <div
                      onDragOver={handleDragOver}
                      onDrop={handleOnDrop}
                      className="w-full flex items-center justify-center gap-4 mx-auto rounded-md border-dotted border-2 border-zinc-500 overflow-hidden p-2"
                    >
                      {coverUrl ? (
                        <img
                          src={coverUrl}
                          alt="Imagem da bolha"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <Export size={32} weight="duotone" color="#6b7280" />
                          <h1 className="text-zinc-500 font-medium">
                            Mostre como você está
                          </h1>
                        </>
                      )}
                    </div>
                  </label>
                  <input
                    id="post-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleOnDrop}
                  />
                  <Input
                    type="text"
                    placeholder={'O que você está pensando?'}
                    color="bg-zinc-100/70"
                    icon={
                      <PaperPlaneRight
                        size={16}
                        color="#71717A"
                        weight="duotone"
                      />
                    }
                    disabled={!user.email}
                    onKeyDown={(e) => handleValue(e, PostType.CREATE, 0)}
                    value={inputValues[0] || ''}
                    onChange={(e) => {
                      setInputValues((prevInputValues) => ({
                        ...prevInputValues,
                        [0]: e.target.value,
                      }));
                    }}
                  />
                </Post.Root>

                {posts &&
                  posts.map((post) => (
                    <Post.Root key={post.idPost} type={PostType.VIEW}>
                      <Post.Header
                        image={post.author.image}
                        name={post.author.username}
                        username={post.author.nickname}
                        dateTime={post.moment}
                        showPopup={post.author.email === user.email}
                      >
                        <div className="bg-zinc-300 w-20 flex flex-col justify-center items-center gap-2 rounded-md">
                          <span
                            onClick={() =>
                              onEdit(post.idPost ?? 0, post.contents)
                            }
                            role="editar"
                            className="w-full text-zinc-700 flex justify-start items-center gap-2 px-1 py-[2px] rounded-md transition duration-200 ease-in-out cursor-pointer hover:bg-zinc-400/20"
                          >
                            <Pencil
                              size={16}
                              color="#334141"
                              weight="duotone"
                            />
                            Editar
                          </span>
                          <span
                            onClick={() => onDelete(post.idPost ?? 0)}
                            role="excluir"
                            className="w-full text-zinc-700 flex justify-start items-center gap-2 px-1 py-[2px] rounded-md transition duration-200 ease-in-out cursor-pointer hover:bg-slate-400/20"
                          >
                            <Trash size={16} color="#334141" weight="duotone" />
                            Excluir
                          </span>
                        </div>
                      </Post.Header>
                      <Post.Content
                        media={post.image}
                        content={post.contents}
                      />

                      {post.comments && post.comments?.length > 0 && (
                        <Post.ShowComments>
                          {post.comments?.map((comment: any) => (
                            <Post.Comment
                              key={comment.idComment}
                              content={comment.contents}
                            >
                              <Post.Header
                                image={comment.author.image}
                                name={comment.author.username}
                                username={comment.author.nickname}
                              />
                            </Post.Comment>
                          ))}
                        </Post.ShowComments>
                      )}

                      <Input
                        type="text"
                        placeholder={'Responder'}
                        color="bg-zinc-100/70"
                        icon={
                          <PaperPlaneRight
                            size={16}
                            color="#71717A"
                            weight="duotone"
                          />
                        }
                        onKeyDown={(e) =>
                          handleValue(e, PostType.VIEW, post.idPost || 0)
                        }
                        value={inputValues[post.idPost || 0] || ''}
                        onChange={(e) => {
                          setInputValues((prevInputValues) => ({
                            ...prevInputValues,
                            [post.idPost || 0]: e.target.value,
                          }));
                        }}
                      />
                    </Post.Root>
                  ))}

                {posts.length === 0 && (
                  <>
                    {[...Array(4)].map((_, index) => (
                      <Skeleton.Post key={index} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Feed;
