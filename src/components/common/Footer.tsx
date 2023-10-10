import { icons, socialLinks } from '../../utils/constants';
import SocialButton from './SocialButton';

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="flex justify-between items-center w-3/4 py-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold uppercase text-gray-700 text-2xl">
            Redes Sociais
          </h2>
          <span>
            Lorem ipsum dolor sit amet consectetur. dolor sit amet consecte
          </span>
          <div className="flex gap-2">
            {icons.map((icon, index) => (
              <SocialButton key={index} icon={icon} link={socialLinks[index]} />
            ))}
          </div>
          <span>All rights reserved &copy; 2023</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold uppercase text-gray-700 text-2xl">Topic</h2>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold uppercase text-gray-700 text-2xl">Topic</h2>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold uppercase text-gray-700 text-2xl">Topic</h2>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
          <h3 className="font-semibold uppercase text-gray-400">Topic item</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
