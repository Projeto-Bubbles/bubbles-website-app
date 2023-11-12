import { useState, ReactNode } from 'react';

interface ShowCommentsProps {
  children: ReactNode;
}

function PostShowComments({ children }: ShowCommentsProps) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <label
        className="self-end bg-zinc-300/50 px-2 uppercase rounded-md text-slate-800 text-right text-sm font-semibold cursor-pointer transition-all duration-200 ease-in hover:bg-zinc-400/20"
        onClick={() => setExpanded(!isExpanded)}
      >
        Ver comentários
      </label>
      <div
        className={`bg-slate-100/50 rounded-md transition-all duration-300 ease-in-out overflow-y-scroll flex flex-col justify-start items-center gap-2 ${
          isExpanded ? 'min-h-fit' : 'opacity-0 h-0 overflow-hidden'
        } `}
      >
        {children}
      </div>
    </>
  );
}

export default PostShowComments;
