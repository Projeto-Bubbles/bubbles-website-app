import { ReactNode, useState } from 'react';
import { PostProps } from '../../../interfaces/post';
import { createComment, createPost } from '../../../services/postServices';
import Input from '../Input';
import { PaperPlaneRight } from 'phosphor-react';

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
  const [inputValue, setInputValue] = useState('');

  const handleValue = (e: any) => {
    if (e.key === 'Enter') {
      const post: PostProps = {
        dateTime: new Date(),
        content: e.target.value,
        author: 'string',
        bubble: 'string,',
      };

      setInputValue('');

      if (type === PostType.CREATE) return createPost(post);

      if (type === PostType.VIEW) return createComment(post);
    }
  };

  return (
    <div
      className={`${
        type === PostType.NOT_LOGGED
          ? 'bg-slate-900 bg-cover bg-bottom'
          : 'bg-zinc-200'
      } w-full flex flex-col gap-4 rounded-lg p-6`}
    >
      {children}

      <Input
        type="text"
        placeholder={
          type === PostType.VIEW ? 'Responder' : 'No que você está pensando?...'
        }
        icon={<PaperPlaneRight size={16} color="#71717A" weight="duotone" />}
        disabled={type === PostType.NOT_LOGGED}
        onKeyDown={handleValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default PostRoot;
