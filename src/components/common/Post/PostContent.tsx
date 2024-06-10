import { Link } from 'react-router-dom';

interface PostContentProps {
  image?: string;
  content?: string;
  isNotLogged?: boolean;
  isOpenModal?: boolean;
}

function PostContent({ image, content, isNotLogged }: PostContentProps) {
  return (
    <div
      className={`w-full ${
        isNotLogged ? 'text-slate-100' : 'text-zinc-700'
      } relative`}
    >
      {image && <img className="rounded-lg mx-auto" src={image} alt="Imagem" />}
      <p className={`text-2xl font-medium leading-none ${image ? 'pt-4' : ''}`}>
        {isNotLogged ? 'Venha interagir com a bolha!' : content}
      </p>

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
    </div>
  );
}

export default PostContent;
