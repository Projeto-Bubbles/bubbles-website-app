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
    <div className="w-full flex items-center justify-center rounded-[20px] h-60 relative bg-red-500">
      <div className="absolute flex items-center justify-center w-5 h-5 right-3 top-3 rounded-md bg-zinc-300/70 backdrop-blur-lg">
        <Image size={12} weight="duotone" />
      </div>

      <Avatar />

      <div className="absolute bottom-0 w-full h-2/5 flex items-center justify-normal rounded-[20px] bg-zinc-300/70 backdrop-blur-lg">
        <div className="w-full flex items-center justify-start text-zinc-700 gap-4">
          <div className="flex justify-center items-center flex-col">
            <span className="font-semibold">bolhas</span>
            <h1 className="font-bold text-xl ">1</h1>
          </div>

          <div className="flex justify-center items-center flex-col">
            <span className="font-semibold">eventos</span>
            <h1 className="font-bold text-xl ">1</h1>
          </div>

          <div className="flex justify-center items-center flex-col">
            <span className="font-semibold">interesses</span>
            <h1 className="font-bold text-xl ">1</h1>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h1>Nome</h1>
          <span>Username</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
