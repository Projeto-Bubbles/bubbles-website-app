import { ReactNode } from 'react';
import Input from '../Input';
import { PaperPlaneRight } from 'phosphor-react';

export enum PostType {
  CREATE = 'bg-zinc-300',
  VIEW = 'bg-zinc-200',
  NOT_LOGGED = 'bg-slate-800 bg-cover bg-bottom',
}

interface PostProps {
  children: ReactNode;
  type: string;
}

function PostRoot({ children, type }: PostProps) {
  return (
    <div className={`${type} w-full flex flex-col gap-4 rounded-lg p-6`}>
      {children}

      {type === PostType.VIEW ? (
        <Input
          type="text"
          placeholder="Responder..."
          icon={<PaperPlaneRight size={16} color="#71717A" weight="duotone" />}
        />
      ) : (
        <Input
          type="text"
          placeholder="O que você está pensando?"
          icon={<PaperPlaneRight size={16} color="#71717A" weight="duotone" />}
        />
      )}
    </div>
  );
}

export default PostRoot;
