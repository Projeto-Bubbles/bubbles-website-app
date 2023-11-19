import {
  ArrowLeft,
  CalendarBlank,
  ChatsTeardrop,
  Compass,
  PaperPlaneRight,
  User,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentProps, PostProps } from '../../interfaces/post';
import {
  createComment,
  createPost,
  getPosts,
} from '../../services/postServices';
import Input from '../common/Input';
import Navbar from '../common/Navbar';
import { Post } from '../common/Post';
import { PostType } from '../common/Post/PostRoot';
import SidebarTopic from '../common/SidebarTopic';
import { mockData } from './../../data/events';
import { Event } from './../common/Event/index';

function Feed() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const user = {
    name: 'Ruan C. Rodrigues',
    username: 'helloWorld',
    email: 'sds',
    password: 2285,
  };

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const getAllPosts = () => {
    getPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.log('👽 ~ error:', error));
  };

  const handleCreatePost = (content: string) => {
    const post: PostProps = {
      dateTime: new Date(),
      content,
      author: user.username,
      bubble: 'string,',
    };

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [0]: '', // Limpa o valor apenas para o componente específico
    }));

    createPost(post)
      .then(() => getAllPosts())
      .catch((err) => console.log('Erro ao criar post:', err));
  };

  const handleCreateComment = (content: string, postId: number) => {
    const comment: CommentProps = {
      dateTime: new Date(),
      content,
      author: user.username,
    };

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [postId]: '', // Limpa o valor apenas para o componente específico
    }));

    createComment(comment);
    getAllPosts();
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

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Navbar />
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

            <Link to={'/search/bubbles'}>
              <SidebarTopic
                icon={<Compass size={14} color="#423F46" weight="duotone" />}
                text="Explorar bolhas"
              />
            </Link>

            <SidebarTopic
              icon={
                <ChatsTeardrop size={14} color="#423F46" weight="duotone" />
              }
              text="Minhas bolhas"
            />

            <Link to={'/search/events'}>
              <SidebarTopic
                icon={
                  <CalendarBlank size={14} color="#423F46" weight="duotone" />
                }
                text="Eventos"
              />
            </Link>
          </div>
          <div>
            <SidebarTopic
              icon={<ArrowLeft size={14} color="#B1C5E1" weight="duotone" />}
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
              {user && (
                <Post.Header name={user.name} nickname={user.username} />
              )}
              <Post.Content
                isNotLogged={!user.email}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
              />
              <Input
                type="text"
                placeholder={'O que você está pensando'}
                color="bg-zinc-100/70"
                icon={
                  <PaperPlaneRight size={16} color="#71717A" weight="duotone" />
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
                <Post.Root key={post.id} type={PostType.VIEW}>
                  <Post.Header
                    name={post.author}
                    nickname="helloWorldRu"
                    dateTime={post.dateTime}
                    showPopup={post.author === user.username}
                  />
                  <Post.Content content={post.content} />

                  <Post.ShowComments>
                    {post.comments?.map((comment: any) => (
                      <Post.Comment
                        key={comment.id}
                        content={comment.content}
                      />
                    ))}
                  </Post.ShowComments>
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
                      handleValue(e, PostType.VIEW, post.id || 0)
                    }
                    value={inputValues[post.id || 0] || ''}
                    onChange={(e) => {
                      setInputValues((prevInputValues) => ({
                        ...prevInputValues,
                        [post.id || 0]: e.target.value,
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
  );
}

export default Feed;
