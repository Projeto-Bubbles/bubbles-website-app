import { ReactNode } from 'react';

interface PostCommentProps {
  content: string;
  children: ReactNode;
}

function PostComment({ content, children }: PostCommentProps) {
  return (
    <div className="w-full bg-slate-100/50 rounded-md p-4">
      {children}
      <p className="text-slate-700 text-xl font-medium">{content}</p>
    </div>
  );
}

export default PostComment;
