import { Image } from 'phosphor-react';
import Avatar from './Avatar';

interface ProfileProps {
  user: {
    image: string;
    name: string;
    username: string;
  };
  statistics: {
    bubbles: number;
    events: number;
    interests: number;
  };
  banner: string;
}

function Profile() {
  return (
    <div className="w-full flex items-center justify-center rounded-[20px] h-56 relative bg-[url('https://i.ytimg.com/vi/QdBZY2fkU-0/maxresdefault.jpg')] bg-cover bg-center">
      <div className="absolute flex items-center justify-center w-5 h-5 right-3 top-3 rounded-md bg-zinc-300/70 backdrop-blur-md cursor-pointer">
        <Image size={12} weight="duotone" />
      </div>

      <div className="-translate-y-1 z-10">
        <Avatar
          isLogged
          isSelected
          image="https://picsum.photos/id/237/200/300"
          isLarged
        />
      </div>

      <div className="flex justify-center items-center absolute bottom-0 w-full h-2/5 rounded-[20px] bg-zinc-300/70 backdrop-blur-lg leading-none">
        <div className="flex absolute left-10 justify-start items-center justify-self-start text-zinc-700 gap-8">
          <div className="flex justify-center items-center flex-col">
            <span className="font-semibold">bolhas</span>
            <h1 className="font-bold text-3xl ">1</h1>
          </div>

          <div className="rounded-full w-[1px] h-10 bg-zinc-700" />

          <div className="flex justify-center items-center flex-col">
            <span className="font-semibold">eventos</span>
            <h1 className="font-bold text-3xl ">1</h1>
          </div>

          <div className="rounded-full w-[1px] h-10 bg-zinc-700" />

          <div className="flex justify-center items-center flex-col">
            <span className="font-semibold">interesses</span>
            <h1 className="font-bold text-3xl ">1</h1>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-zinc-700">
          <h1 className="font-bold text-2xl">Nome Sobrenome</h1>
          <span className="font-semibold text-normal">@nickname</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
