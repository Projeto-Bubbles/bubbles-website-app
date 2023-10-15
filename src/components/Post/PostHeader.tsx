import { format } from 'date-fns';

interface PostHeaderProps {
  name: string;
  nickname: string;
  isNotLogged?: boolean;
}

function PostHeader({ name, nickname, isNotLogged }: PostHeaderProps) {
  const date: Date = new Date();

  return (
    <div
      className={`w-full ${
        isNotLogged ? 'text-zinc-300' : 'text-zinc-500'
      } flex justify-start items-center gap-6`}
    >
      <h4 className="text-lg font-bold">{name}</h4>

      <div className="w-48 flex justify-between item-center">
        <span>{`@${nickname}`} </span>
        <em>•</em>
        <span>{date.getHours()}h</span>
        <em>•</em>
        <span>{format(date, 'dd/MM')} </span>
      </div>
    </div>
  );
}

export default PostHeader;
