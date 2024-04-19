import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';
import BackButton from './../BackButton';

export function ChatSidebar() {
  const navigate = useNavigate();

  const avatars = [
    'Bolha 1',
    'Uma máquina minha',
    'Receba',
    'Bolha 1',
    'Para',
    'Bolha 1',
    'Bolha 1',
    'Bolha 1',
    'Bolha 1',
    'Bolha 1',
  ];

  return (
    <aside className="w-full h-full bg-zinc-300 flex flex-col items-center justify-between py-10 rounded-r-2xl relative">
      <div className="grid place-items-center">
        <img
          className="w-1/4"
          src="../src/assets/bubble-logo-flat.png"
          alt="logo bubbles"
        />
      </div>

      <div className="w-[400px] flex flex-col items-center justify-start gap-4 max-h-[400px] py-2 overflow-y-auto scrollbar-hide absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {avatars.map((avatar, index) => (
          <div key={index} className="relative flex items-center group">
            <span className="w-max bg-slate-800 text-slate-100 p-1 rounded-md absolute translate-x-16 opacity-0 transition ease-in-out duration-200 group-hover:opacity-100 z-50">
              {avatar}
            </span>

            <div className="bg-red-500 text-slate-100 font-medium size-4 grid place-content-center rounded-full leading-none absolute right-0 bottom-0">
              1
            </div>

            <Avatar
              image={`https://picsum.photos/id/${index + 67}/200/300`}
              isLogged
              size="md"
            />
          </div>
        ))}
      </div>

      <BackButton onClick={() => navigate('/feed')} />
    </aside>
  );
}
