import {
  ArrowLeft,
  CalendarBlank,
  ChatsTeardrop,
  Compass,
  PaperPlaneRight,
  Pencil,
  Trash,
  User,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostProps } from '../../interfaces/post';
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
import { mockData } from './../../data/events';
import { Event } from './../common/Event/index';

function Feed() {
  localStorage.setItem('previousPage', 'feed');

  const [currentContent, setCurrentContent] = useState<string | undefined>();

  const [isVisible, setIsVisible] = useState(false);
  const [postId, setPostId] = useState(0);

  const [posts, setPosts] = useState<PostProps[]>([]);

  const user = JSON.parse(localStorage.getItem('user') ?? '{}');

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const getAllPosts = () => {
    getPosts().then((response) => setPosts(response.data));
  };

  const handleCreatePost = (contents: string) => {
    const post: any = {
      dateTime: new Date(),
      contents,
      idAuthor: user.id,
      idBubble: 1,
    };

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [0]: '', // Limpa o valor apenas para o componente específico
    }));

    createPost(post).then(() => getAllPosts());
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

  const handleValue = (e: any, type: PostType, postId: number) => {
    if (e.key === 'Enter') {
      const content = e.target.value;

      if (content === '') return;

      if (type === PostType.CREATE) {
        handleCreatePost(content);
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
    const confirm = window.confirm('Deseja realmente editar o post?');

    if (confirm) {
      editPost(postId, newContent)
        .then(() => {
          alert('✅ Post editado com sucesso!');
          getAllPosts();
          setIsVisible(false);
        })
        .catch((error) => console.error(error));
    }
  };

  const onEdit = (postId: number, content: string) => {
    setIsVisible(true);
    setPostId(postId);
    setCurrentContent(content);
  };

  const onDelete = (id: number) => {
    const confirm = window.confirm('Deseja realmente excluir o post?');

    if (confirm) {
      deletePost(id)
        .then(() => {
          alert('✅ Post excluído com sucesso!');
          getAllPosts();
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
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
                <SidebarTopic
                  icon={<User size={14} color="#423F46" weight="duotone" />}
                  text="Minha conta"
                />

                <Link to={'/bubbles'}>
                  <SidebarTopic
                    icon={
                      <Compass size={14} color="#423F46" weight="duotone" />
                    }
                    text="Explorar bolhas"
                  />
                </Link>

                <SidebarTopic
                  icon={
                    <ChatsTeardrop size={14} color="#423F46" weight="duotone" />
                  }
                  text="Minhas bolhas"
                />

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
                <div className="w-full h-72 flex justify-between items-center">
                  {mockData.map((events, index) => (
                    <Event.Story key={index} {...events} />
                  ))}
                </div>
              </div>

              {/* Post */}
              <div className="w-full flex flex-col gap-16">
                <Post.Root
                  type={user.email ? PostType.CREATE : PostType.NOT_LOGGED}
                >
                  {user.email && (
                    <Post.Header
                      name={user.username}
                      username={user.nickname}
                    />
                  )}
                  <Post.Content
                    isNotLogged={!user.email}
                    content="Compartilhe suas ideias com a bubbles! 🫧"
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
                      <Post.Content content={post.contents} />

                      {post.comments && post.comments?.length > 0 && (
                        <Post.ShowComments>
                          {post.comments?.map((comment: any) => (
                            <Post.Comment
                              key={comment.idComment}
                              content={comment.contents}
                            >
                              <Post.Header
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
                  <h1>🙁 Ops, não conseguimos trazer os posts</h1>
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
