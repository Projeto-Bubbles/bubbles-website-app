import Button from './Button';
import { SignIn, UserCirclePlus } from 'phosphor-react';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between py-6 px-8">
        <div className="w-24">
          <img src="../src/assets/bubbles-logo-glass.png" alt="logo" />
        </div>
        <div className="flex items-center gap-20 w-max">
          <ul className="flex gap-10">
            <a href="">
              <li className="font-medium">Home</li>
            </a>
            <a href="">
              <li className="font-medium">Sobre nós</li>
            </a>
            <a href="">
              <li className="font-medium">Comunidade</li>
            </a>
            <a href="">
              <li className="font-medium">Time</li>
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
              icon={<UserCirclePlus size={20} color="#182b3e" weight="duotone" />}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
