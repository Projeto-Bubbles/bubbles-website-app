import { ReactNode } from 'react';

export enum PostType {
  CREATE = 'create',
  VIEW = 'view',
  NOT_LOGGED = 'not_logged',
}

interface PostRootProps {
  children: ReactNode;
  type: string;
}

function PostRoot({ children, type }: PostRootProps) {
  return (
    <div
      className={`${
        type === PostType.NOT_LOGGED
          ? 'bg-slate-900 bg-cover bg-bottom'
          : 'bg-zinc-200'
      } w-full flex flex-col gap-4 rounded-lg p-6`}
    >
      {children}
    </div>
  );
}

export default PostRoot;
