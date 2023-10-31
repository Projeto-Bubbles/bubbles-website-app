import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import SidebarTopic from '../common/SidebarTopic';
import {
  ArrowLeft,
  CalendarBlank,
  ChatsTeardrop,
  Compass,
  User,
} from 'phosphor-react';
import { Post } from '../common/Post';
import { PostType } from '../common/Post/PostRoot';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/post-services';
import { mockData } from './../../data/events';
import { Event } from '../common/Event';

function Feed() {
  const navigate = useNavigate();

  const [isExpanded, setExpanded] = useState(false);

  const [posts, setPosts] = useState<any>([]);

  const onLogoff = () => {
    sessionStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    async function fetchPosts() {
      const postsData = await getPosts();
      setPosts(postsData);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[url('../../src/assets/bubbles-effect.png')] bg-cover flex justify-start ">
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

            <SidebarTopic
              icon={<Compass size={14} color="#423F46" weight="duotone" />}
              text="Explorar bolhas"
            />

            <SidebarTopic
              icon={
                <ChatsTeardrop size={14} color="#423F46" weight="duotone" />
              }
              text="Minhas bolhas"
            />
            <Link to={'/events'}>
              <SidebarTopic
                icon={
                  <CalendarBlank size={14} color="#423F46" weight="duotone" />
                }
                text="Eventos"
              />
            </Link>
          </div>
          <div onClick={() => onLogoff()}>
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
                Últimos eventos
              </h1>
            </div>
            <div className="w-full h-72 flex justify-between items-center">
              {mockData.map((events, index) => (
                <Event.Story key={index} {...events} />
              ))}
            </div>
          </div>

          {/* Post */}
          <div className="w-full flex flex-col gap-20">
            <Post.Root type={PostType.NOT_LOGGED}>
              <Post.Content
                isNotLogged
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
              />
            </Post.Root>

            {posts.map((post: any) => (
              <Post.Root key={post.id} type={PostType.VIEW}>
                <Post.Header
                  name={post.author}
                  nickname="helloWorldRu"
                  date={post.dateTime}
                />
                <Post.Content content={post.content} />
                <label
                  className="self-end bg-zinc-300/50 px-2 uppercase rounded-md text-slate-800 text-right text-sm font-semibold cursor-pointer transition-all duration-200 ease-in hover:bg-zinc-400/20"
                  onClick={() => setExpanded(!isExpanded)}
                >
                  Ver comentários
                </label>
                <div
                  className={`bg-slate-100/50  rounded-md transition-all duration-300 ease-in-out overflow-y-scroll flex flex-col justify-start items-center gap-2 ${
                    isExpanded ? 'h-80' : 'opacity-0 h-0 overflow-hidden'
                  } `}
                >
                  {post.comments.map((comment: any) => (
                    <Post.Comment key={comment.id} content={comment.content} />
                  ))}
                </div>
              </Post.Root>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Feed;
