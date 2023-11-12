import { Link } from 'react-router-dom';
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
import { useState, useEffect } from 'react';
import { mockData } from './../../data/events';
import { Event } from '../common/Event';
import { PostProps } from '../../interfaces/post';
import { getPosts } from '../../services/postServices';

function Feed() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.log('👽 ~ error:', error));
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
            <Post.Root type={PostType.CREATE}>
              <Post.Content
                // isNotLogged
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
              />
            </Post.Root>

            {posts &&
              posts.map((post) => (
                <Post.Root key={post.id} type={PostType.VIEW}>
                  <Post.Header
                    name={post.author}
                    nickname="helloWorldRu"
                    dateTime={post.dateTime}
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
