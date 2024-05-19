import { Users } from 'phosphor-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Bubble } from '.';
import { bubbles } from '../../../data/bubbles';
import { BubbleProps } from '../../../interfaces/bubble';
import { addUserToBubble, getLocalUser } from '../../../services/userServices';

function BubbleCard(bubble: BubbleProps) {
  const targetBubble = bubbles(12).find((b) => b.category === bubble.category);
  const user: any = getLocalUser();
  const navigate = useNavigate();

  const bubbleInfo = {
    ...bubble,
    icon: targetBubble?.icon,
    color: targetBubble?.color,
    category: targetBubble?.title,
  };

  const onEnterBubble = () => {
    toast.promise(
      addUserToBubble(user.id, bubble?.idBubble!!).then(() => {
        setTimeout(() => {
          navigate('/my-bubbles');
        }, 1000);
      }),
      {
        loading: 'Entrando na bolha...',
        success: 'Você entrou na bolha ' + bubble.title,
        error: 'Não foi possível entrar na bolha :(',
      }
    );
  };

  return (
    <div className="w-72 h-68 bg-zinc-200 text-zinc-700 rounded-lg flex flex-col justify-between items-center group mb-6">
      <div className="w-full h-[170px] flex flex-col justify-start items-center p-6 gap-6">
        <div className="w-full flex justify-between items-center">
          <Bubble.Tag
            icon={bubbleInfo.icon}
            title={bubbleInfo.category ?? ''}
            color={bubbleInfo.color}
            fixed
          />
          <div className="w-14 flex justify-end items-center gap-2">
            <Users size={16} color="#423F46" weight="duotone" />
            <span className="font-bold">{bubble.users}k</span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-2">
          <h1 className="font-bold text-xl leading-none">{bubble.title}</h1>
          <p className="text-base font-medium leading-none">
            {bubble.explanation}
          </p>
        </div>
      </div>

      <div className="w-full h-[100px] flex justify-center items-center relative overflow-hidden translate-y-5">
        <button
          onClick={() => onEnterBubble()}
          className="bg-slate-400/70 font-bold uppercase backdrop-blur-lg flex justify-around items-center rounded-full p-1 translate-x-52 absolute transition duration-300 ease-in-out group-hover:translate-x-28"
        >
          Entrar
        </button>
        <img
          src={bubble.image}
          alt={bubble.title}
          className="w-full h-full object-cover object-center rounded-[40px]"
        />
      </div>
    </div>
  );
}

export default BubbleCard;
