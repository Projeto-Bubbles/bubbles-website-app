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
import { useState } from 'react';

function Feed() {
  const navigate = useNavigate();
  const [isExpanded, setExpanded] = useState(false);

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
          <div onClick={() => navigate('/')}>
            <SidebarTopic
              icon={<ArrowLeft size={14} color="#B1C5E1" weight="duotone" />}
              text="Sair"
              isLogout
            />
          </div>
        </div>

        {/* Feed Content */}
        <div className="w-2/6 min-h-screen m-auto flex flex-col justify-start items-center pt-28">
          <Post.Root type={PostType.VIEW}>
            <Post.Header name="Ruan" nickname="helloWorldRu" />
            <Post.Content content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit similique, saepe veniam a beatae exercitationem velit fuga, magnam maxime ab quaerat aperiam tempore eos! Ducimus totam commodi eaque quaerat!" />
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
              <Post.Comment content="QUe merda heinn" />
              <Post.Comment content="QUe merda heinn" />
              <Post.Comment content="QUe merda heinn" />
              <Post.Comment content="QUe merda heinn" />
              <Post.Comment content="QUe merda heinn" />
            </div>
          </Post.Root>
        </div>
      </main>
    </>
  );
}

export default Feed;
