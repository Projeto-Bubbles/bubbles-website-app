import Button from './Button';
import { ArrowRight } from 'phosphor-react';

function OutBubbles() {
  return (
    <div className="w-full p-6 mt-28 flex justify-center items-center">
      <div className="w-3/4 flex justify-between items-center gap-10">
        <div>
          <img
            src="../src/assets/Mask group.png"
            alt="Imagem de divulgação da Bubble" className='h-[465px]'
          />
        </div>
        <div className='w-[480px] flex flex-col gap-5'>
          <h1 className="text-7xl leading-none text-zinc-700">
            Fora da bolha, dentro do mundo.
          </h1>
          <p className="text-2xl leading-none text-zinc-700">
            Na Bubbles, não se trata apenas de seguir a corrente. Desafiamos o
            convencional, conectamos interesses e exploramos o novo. Junte-se a
            nós e expanda sua visão!
          </p>
          <div className='w-30'>
              <Button
                text="FURAR A BOLHA"
                color="bg-blue-200"
                icon={<ArrowRight size={20} color="#182b3e" weight="duotone" />}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutBubbles;