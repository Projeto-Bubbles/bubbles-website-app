import { User } from 'phosphor-react';

interface AvatarProps {
  image?: string;
  name?: string;
  username?: string;
  isLogged?: boolean;
  isSelected?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const avatarSize = {
  sm: 'w-9 h-9',
  md: 'w-12 h-12',
  lg: 'w-24 h-24',
};

function Avatar({ name, image, username, isLogged, size }: AvatarProps) {
  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      <div
        className={`${
          avatarSize[size ?? 'sm']
        }  grid place-content-center bg-slate-300 rounded-3xl ring-2 ring-[#C1C0C0] overflow-hidden transition-all duration-300 ease-in-out hover:rounded-xl`}
      >
        {isLogged ? (
          <img
            src={image ?? 'https://picsum.photos/id/237/200/300'}
            className="w-full h-full object-cover rounded-full "
          />
        ) : (
          <User size={20} color="#3f3f46" weight="duotone" />
        )}
      </div>

      {name && username && (
        <div className="flex flex-col justify-center items-start text-zinc-700 ">
          <h1 className="text-lg font-semibold leading-none"> {name} </h1>
          <h2 className="text-base font-medium text-zinc-500 leading-none">
            @{username}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Avatar;
