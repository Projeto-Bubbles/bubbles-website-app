import { icons, socialLinks } from '../utils/constants';
import SocialButton from './common/SocialButton';

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center pb-16">
      <div className="flex justify-between items-center w-3/4 py-4">
        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold uppercase text-gray-700 text-2xl">
            Redes Sociais
          </h2>
          <span>
          Junte-se à nossa comunidade online e compartilhe suas experiências.
          </span>
          <div className="flex gap-6">
            {icons.map((icon, index) => (
              <SocialButton key={index} icon={icon} link={socialLinks[index]} />
            ))}
          </div>
          <span>All rights reserved &copy; 2023</span>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="font-bold uppercase text-gray-700 text-2xl text-center">Documentação</h2>
          <h3 className="font-semibold uppercase text-gray-400">Documento da Aplicação</h3>
          <h3 className="font-semibold uppercase text-gray-400">Funcionalidades e Recursos</h3>
          <h3 className="font-semibold uppercase text-gray-400">Problemas de Acessibilidade </h3>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="font-bold uppercase text-gray-700 text-2xl text-center">Suporte</h2>
          <h3 className="font-semibold uppercase text-gray-400">Central de Ajuda</h3>
          <h3 className="font-semibold uppercase text-gray-400">Perguntas Frequentes (FAQ)</h3>
          <h3 className="font-semibold uppercase text-gray-400">Atendimento ao Usuário</h3>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h2 className="font-bold uppercase text-gray-700 text-2xl text-center">Políticas</h2>
          <h3 className="font-semibold uppercase text-gray-400">Política de Privacidade</h3>
          <h3 className="font-semibold uppercase text-gray-400">Política de Cookies</h3>
          <h3 className="font-semibold uppercase text-gray-400">Termos e Condições</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
