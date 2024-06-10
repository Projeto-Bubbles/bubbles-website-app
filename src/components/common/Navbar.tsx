import { SignIn, UserCirclePlus } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import Button from './Button';

interface NavbarProps {
  withMenu?: boolean;
  redirectPage?: string;
  isLogged?: boolean;
}

function Navbar({ withMenu, redirectPage, isLogged }: NavbarProps) {
  const user = JSON.parse(localStorage.getItem('user') ?? '[]');

  const navigate = useNavigate();

  return (
    <>
      <nav
        className={`w-screen bg-slate-100 flex ${
          withMenu ? 'justify-between' : 'justify-between'
        } py-6 px-8 z-50 fixed`}
      >
        <div className="w-24">
          <Link to={redirectPage ?? '/'}>
            <img src={"https://gnqwmoqebpqfmqthyqkh.supabase.co/storage/v1/object/public/bubbles-bucket/bubbles-logo-glass.png"} alt="logo" />
          </Link>
        </div>

        {isLogged && (
          <Avatar
            isLogged
            size="sm"
            name={user.username}
            username={user.nickname}
            image={user.image}
          />
        )}

        {withMenu && (
          <div className="flex items-center gap-16 w-max">
            <ul className="flex gap-12 text-lg h-full w-full">
              <a
                href="#hero"
                className="transition duration-300 ease-in-out hover:text-slate-900"
              >
                <li className="h-[2px] w-full group">
                  Home
                  <div className="bg-slate-700 w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
              </a>
              <a
                href="#about"
                className="transition duration-300 ease-in-out hover:text-slate-900"
              >
                <li className="h-[2px] w-full group">
                  Sobre nós
                  <div className="bg-slate-700 w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
              </a>
              <a
                href="#bubbles"
                className="transition duration-300 ease-in-out hover:text-slate-900"
              >
                <li className="h-[2px] w-full group">
                  Comunidade
                  <div className="bg-slate-700 w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
              </a>
              <a
                href="#benefits"
                className="transition duration-300 ease-in-out hover:text-slate-900"
              >
                <li className="h-[2px] w-full group">
                  Junte-se
                  <div className="bg-slate-700 w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
              </a>
              <a
                href="#team"
                className="transition duration-300 ease-in-out hover:text-slate-900"
              >
                <li className="h-[2px] w-full group">
                  Time
                  <div className="bg-slate-700 w-0 h-[1.5px] rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </li>
              </a>
            </ul>
            <div className="flex gap-4">
              <Button
                text="Entrar"
                color="bg-zinc-300"
                icon={<SignIn size={16} color="#182b3e" weight="duotone" />}
                onClick={() => navigate('sign-in')}
              />

              <Button
                text="Cadastrar"
                color="bg-blue-200"
                icon={
                  <UserCirclePlus size={20} color="#182b3e" weight="duotone" />
                }
                onClick={() => navigate('sign-up')}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
