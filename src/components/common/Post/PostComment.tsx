import { Post } from '.';

interface PostCommentProps {
  content: string;
}

function PostComment({ content }: PostCommentProps) {
  return (
    <div className="w-full bg-slate-100/50 rounded-md p-4">
      <Post.Header name="Zézinho" nickname="zexin3242" dateTime={new Date()}/>
      <p className="text-slate-700 text-xl font-medium">{content}</p>
    </div>
  );
}

export default PostComment;
