import Blur from './Blur';
import Card from './Card';
import { Users, Balloon, MagnifyingGlass } from "phosphor-react";

function Hero() {
  return (
    <div className="h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover bg-no-repeat flex flex-col pt-5 items-center">
      <h1 className="flex flex-col justify-center items-center text-[5rem] pt-40 leading-none text-gray-700">
        Não fure a fila,
        <strong>fure a Bubble.</strong>
      </h1>

      <Blur />
      <div className='grid grid-cols-3 w-3/4 gap-16'>
        <Card icon={<Users size={24} color="#3b9b58" weight="duotone" />} title='Grupos' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio velit dolorem nesciunt soluta fugit.'/>
        <Card icon={<Balloon size={24} color="#c66271" weight="duotone" />} title='Eventos' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio velit dolorem nesciunt soluta fugit.'/>
        <Card icon={<MagnifyingGlass size={24} color="#9962c6" weight="duotone" />} title='Descubra' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio velit dolorem nesciunt soluta fugit.'/>
      </div>
    </div>
  );
}

export default Hero;
