import Button from './common/Button';
import { ArrowRight } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

function OutBubbles() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-center mb-32">
      <div className="w-3/4 flex justify-between items-center gap-10">
        <div className="w-2/6">
          <img
            src="../../src/assets/out-bubbles-image.png"
            alt="Imagem de divulgação da Bubble"
            className="h-[465px] w-full object-cover object-center rounded-md"
          />
        </div>
        <div className="w-[480px] flex flex-col gap-10">
          <h1 className="text-7xl leading-none text-zinc-700">
            Fora da bolha, dentro do mundo.
          </h1>
          <p className="text-2xl leading-none text-zinc-700">
            Na Bubbles, não se trata apenas de seguir a corrente. Desafiamos o
            convencional, conectamos interesses e exploramos o novo. Junte-se a
            nós e expanda sua visão!
          </p>
          <div className="w-30">
            <Button
              onClick={() => navigate('/selection')}
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
