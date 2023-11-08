import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SidebarTopicProps {
  icon: ReactNode;
  text: string;
  isLogout?: boolean;
}

function SidebarTopic({ icon, text, isLogout }: SidebarTopicProps) {
  const navigate = useNavigate();

  const onLogoff = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <button
      onClick={() => onLogoff()}
      className={`w-max p-2 pr-3 rounded-full flex justify-between items-center ${
        isLogout
          ? 'bg-slate-800 hover:bg-slate-900'
          : 'bg-zinc-200 hover:bg-zinc-300'
      }  transition duration-300 ease-out hover:translate-x-1`}
    >
      <div
        className={`w-4 h-4 grid place-content-center mr-2 ${
          isLogout ? 'bg-blue-200/10' : 'bg-zinc-300'
        } p-3 rounded-full`}
      >
        {icon}
      </div>
      <h3
        className={`${
          isLogout ? 'text-[#B1C5E1]' : 'text-zinc-700'
        } font-semibold text-sm uppercase`}
      >
        {text}
      </h3>
    </button>
  );
}

export default SidebarTopic;
