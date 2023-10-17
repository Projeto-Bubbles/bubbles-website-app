interface PostContentProps {
  content: string;
  span?: string;
  isNotLogged?: boolean;
}

function PostContent({ content, span, isNotLogged }: PostContentProps) {
  return (
    <div
      className={`w-full ${isNotLogged ? 'text-slate-100' : 'text-zinc-700'}`}
    >
      <h2 className="text-2xl font-medium leading-none">{content}</h2>
      {span && <span className="text-lg">{span}</span>}
    </div>
  );
}

export default PostContent;
