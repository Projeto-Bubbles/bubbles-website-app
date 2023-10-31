import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PostContentProps {
  content?: string;
  isNotLogged?: boolean;
  isOpenModal?: boolean;
}

function PostContent({ content, isNotLogged }: PostContentProps) {
  return (
    <div
      className={`w-full ${
        isNotLogged ? 'text-slate-100' : 'text-zinc-700'
      } relative`}
    >
      <h2 className="text-2xl font-medium leading-none">
        {isNotLogged ? 'Venha interagir com a bolha!' : content}
      </h2>
      {isNotLogged && (
        <span>
          Entre na bolha fazendo{' '}
          <Link to={'/sign-in'} className="underline">
            login
          </Link>{' '}
          ou{' '}
          <Link to={'/sign-up'} className="underline">
            cadastro.
          </Link>
        </span>
      )}

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
