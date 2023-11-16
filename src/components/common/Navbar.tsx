import Button from './Button';
import { SignIn, UserCirclePlus } from 'phosphor-react';
import { Link } from 'react-router-dom';

function Navbar(props: { withMenu?: boolean }) {
  return (
    <>
      <nav
        className={`w-screen bg-slate-100 flex ${
          props.withMenu ? 'justify-between' : 'justify-start'
        } py-6 px-8 z-50 fixed`}
      >
        <div className="w-24">
          <Link to={'/'}>
            <img src={"bg-testeImagem"} alt="logo" />
          </Link>
        </div>

        {props.withMenu && (
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
              <a href="#benefits">
                <li>Junte-se</li>
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
              <Link to={'sign-in'}>
                <Button
                  text="Entrar"
                  color="bg-zinc-300"
                  icon={<SignIn size={16} color="#182b3e" weight="duotone" />}
                />
              </Link>

              <Button
                text="Cadastrar"
                color="bg-blue-200"
                icon={
                  <UserCirclePlus size={20} color="#182b3e" weight="duotone" />
                }
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
