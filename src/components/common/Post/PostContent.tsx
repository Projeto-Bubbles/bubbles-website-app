import { Link } from 'react-router-dom';

interface PostContentProps {
  media?: string;
  content?: string;
  isNotLogged?: boolean;
  isOpenModal?: boolean;
}

function PostContent({ media, content, isNotLogged }: PostContentProps) {
  return (
    <div
      className={`w-full ${
        isNotLogged ? 'text-slate-100' : 'text-zinc-700'
      } relative`}
    >
      {media && media.endsWith('.mp4') ? (
        <video className="rounded-lg mx-auto" controls>
          <source src={media} type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
      ) : (
        media && <img className="rounded-lg mx-auto" src={media} alt="Imagem" />
      )}
      <p className={`text-2xl font-medium leading-none ${media ? 'pt-4' : ''}`}>
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
