import { format } from 'date-fns';
import { DotsThreeOutline } from 'phosphor-react';
import { useState } from 'react';
import Popup from './../Popup';

interface PostHeaderProps {
  name: string;
  username: string;
  dateTime?: Date;
  isNotLogged?: boolean;
  showPopup?: boolean;
}

function PostHeader({
  name,
  username,
  isNotLogged,
  dateTime,
  showPopup,
}: PostHeaderProps) {
  const [isVisiblePopup, setVisiblePopup] = useState(false);
  const date = new Date(dateTime || 0);

  return (
    <div
      className={`w-full ${
        isNotLogged ? 'text-zinc-300' : 'text-zinc-500'
      } flex justify-between items-center relative`}
    >
      <div className="w-3/4 flex justify-start gap-4 items-center">
        <h4 className="w-max bg-red text-lg font-bold">{name}</h4>

        <div className="w-48 flex justify-start item-center gap-3">
          <span>{`@${username}`} </span>

          {dateTime && (
            <>
              <em>•</em>
              <span>{date.getHours()}h</span>
              <em>•</em>
              <span>{format(date, 'dd/MM')} </span>
            </>
          )}
        </div>
      </div>

      {showPopup && (
        <>
          <div
            onClick={() => setVisiblePopup(!isVisiblePopup)}
            className={`bg-slate-300/50 px-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer hover:bg-slate-300 ${
              isVisiblePopup ? '-translate-x-20' : 'translate-x-0'
            }`}
          >
            <DotsThreeOutline size={16} color="#f0f4f8" weight="fill" />
          </div>

          <div
            className={`transition duration-300 ease-in-out absolute -right-6 -top-6 ${
              isVisiblePopup ? 'opacity-100 z-50' : 'opacity-0 -z-50'
            }`}
          >
            <Popup />
          </div>
        </>
      )}
    </div>
  );
}

export default PostHeader;
