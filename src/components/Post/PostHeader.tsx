import { format } from 'date-fns';

interface PostHeaderProps {
  name: string;
  nickname: string;
}

function PostHeader({ name, nickname }: PostHeaderProps) {
  const date: Date = new Date();

  return (
    <div className="w-full text-zinc-500 flex justify-start items-center gap-6">
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
