import { ReactNode } from 'react';

export const PostType: any = {
  CREATE_POST: 'bg-zinc-300',
  VIEW_POST: 'bg-zinc-200',
  NOT_LOGGED:
    "bg-slate-900 bg-[url('../src/assets/bubbles-effect.png'] bg-cover bg-bottom",
};

interface PostProps {
  children: ReactNode;
  type: string;
}

function PostRoot({ children, type }: PostProps) {
  return (
    <div className={`w-full flex flex-col gap-2 rounded-lg p-6`}>
      {children}
    </div>
  );
}

export default PostRoot;
