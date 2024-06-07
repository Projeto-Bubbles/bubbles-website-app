import { icons, socialLinks } from '../utils/constants';
import SocialButton from './common/SocialButton';

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center pb-16 pt-44">
      <div className="flex justify-between items-start w-3/4 py-4">
        <div className="flex flex-col gap-4 w-1/4">
          <h2 className="font-bold uppercase text-gray-700 text-2xl">
            Redes Sociais
          </h2>
          <span className="text-lg text-zinc-700 leading-none">
            Junte-se à nossa comunidade online e compartilhe suas experiências.
          </span>
          <div className="flex gap-4">
            {icons.map((icon, index) => (
              <SocialButton key={index} icon={icon} link={socialLinks[index]} />
            ))}
          </div>
          <span>All rights reserved &copy; 2023</span>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="font-bold uppercase text-gray-700 text-2xl text-center">
            Documentação
          </h2>
          <a className="font-semibold uppercase text-gray-400">
            Documento da Aplicação
          </a>
          <a className="font-semibold uppercase text-gray-400">
            Funcionalidades e Recursos
          </a>
          <a className="font-semibold uppercase text-gray-400">
            {' '}
            Guia do Usuário{' '}
          </a>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="font-bold uppercase text-gray-700 text-2xl text-center">
            Suporte
          </h2>
          <a className="font-semibold uppercase text-gray-400">
            Central de Ajuda
          </a>
          <a className="font-semibold uppercase text-gray-400">
            Perguntas Frequentes (FAQ)
          </a>
          <a className="font-semibold uppercase text-gray-400">
            Atendimento ao Usuário
          </a>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="font-bold uppercase text-gray-700 text-2xl text-center">
            Políticas
          </h2>
          <a className="font-semibold uppercase text-gray-400">
            Política de Privacidade
          </a>
          <a className="font-semibold uppercase text-gray-400">
            Política de Cookies
          </a>
          <a className="font-semibold uppercase text-gray-400">
            Termos e Condições
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
