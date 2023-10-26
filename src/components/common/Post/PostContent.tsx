import { useState } from 'react';

interface PostContentProps {
  content: string;
  span?: string;
  isNotLogged?: boolean;
  isOpenModal?: boolean;
}

function PostContent({ content, span, isNotLogged }: PostContentProps) {
  return (
    <div
      className={`w-full ${
        isNotLogged ? 'text-slate-100' : 'text-zinc-700'
      } relative`}
    >
      <h2 className="text-2xl font-medium leading-none">{content}</h2>
      {span && <span className="text-lg">{span}</span>}

      {/* <div>
        <textarea
          className={`w-full h-40 bg-none absolute transition duration-300 ease-in-out ${
            isOpenModal ? 'opacity-100 z-50' : 'opacity-0 -z-50'
          }`}
        >
          {content}
        </textarea>
      </div> */}
    </div>
  );
}

export default PostContent;
