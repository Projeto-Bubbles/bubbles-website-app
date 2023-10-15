interface PostContentProps {
  content: string;
  span?: string;
}

function PostContent({ content, span }: PostContentProps) {
  return (
    <div className="w-full text-zinc-700">
      <h2 className="text-2xl font-medium">{content}</h2>
      {span && <span className="text-lg">{span}</span>}
    </div>
  );
}

export default PostContent;
