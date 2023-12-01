import { User } from 'phosphor-react';

interface AvatarProps {
  image: string;
  name?: string;
  username?: string;
  isLogged?: boolean;
}

function Avatar({ image, name, username, isLogged }: AvatarProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-9 h-9 grid place-content-center bg-slate-300 rounded-full">
        {isLogged ? (
          <img
            src={image}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <User size={20} color="#3f3f46" weight="duotone" />
        )}
      </div>
      <div className="flex flex-col justify-center items-start text-zinc-700 ">
        <h1 className="text-lg font-semibold leading-none"> {name} </h1>
        <h2 className="text-base font-medium text-zinc-500 leading-none">
          {username}
        </h2>
      </div>
    </div>
  );
}

export default Avatar;
