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
            <img src="../src/assets/bubbles-logo-glass.png" alt="logo" />
          </Link>
        </div>

        {props.withMenu && (
          <div className="flex items-center gap-16 w-max">
            <ul className="flex gap-12 text-lg">
              <a href="#hero">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>Sobre nós</li>
              </a>
              <a href="#bubbles">
                <li>Comunidade</li>
              </a>
              <a href="#benefits">
                <li>Junte-se</li>
              </a>
              <a href="#team">
                <li>Time</li>
              </a>
            </ul>

            <div className="flex gap-4">
              <Button
                text="Entrar"
                color="bg-zinc-300"
                icon={<SignIn size={16} color="#182b3e" weight="duotone" />}
              />

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
