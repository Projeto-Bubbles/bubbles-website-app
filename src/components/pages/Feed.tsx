import Navbar from '../common/Navbar';
import SidebarTopic from '../common/SidebarTopic';
import {
  ArrowLeft,
  CalendarBlank,
  ChatsTeardrop,
  Compass,
  User,
} from 'phosphor-react';

function Feed() {
  return (
    <>
      <Navbar />
      <main className="bg-[url('../../src/assets/bubbles-effect.png')] bg-cover flex justify-start ">
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
            <SidebarTopic
              icon={
                <CalendarBlank size={14} color="#423F46" weight="duotone" />
              }
              text="Eventos"
            />
          </div>
          <div>
            <SidebarTopic
              icon={<ArrowLeft size={14} color="#B1C5E1" weight="duotone" />}
              text="Sair"
              isLogout
            />
          </div>
        </div>

        <div className="m-auto">
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
          <div>ra´paz</div>
        </div>
      </main>
    </>
  );
}

export default Feed;
