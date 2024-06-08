import { User } from 'phosphor-react';

interface AvatarProps {
  image?: string;
  name?: string;
  username?: string;
  isLogged?: boolean;
  isSelected?: boolean;
  size: 'sm' | 'md' | 'lg';
}

const avatarSize = {
  sm: { common: 'w-9 h-9', icon: 20 },
  md: { common: 'w-12 h-12', icon: 30 },
  lg: { common: 'w-24 h-24', icon: 55 },
};

function Avatar({ name, image, username, isLogged, size }: AvatarProps) {
  const { common, icon } = avatarSize[size] || avatarSize['sm'];

  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      <div
        className={`${common} grid place-content-center bg-slate-300 rounded-3xl ring-2 ring-[#C1C0C0] overflow-hidden transition-all duration-300 ease-in-out hover:rounded-xl`}
      >
        {isLogged && image ? (
          <img src={image} className="w-full h-full object-cover" />
        ) : (
          <User size={icon} color="#3f3f46" weight="duotone" />
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
