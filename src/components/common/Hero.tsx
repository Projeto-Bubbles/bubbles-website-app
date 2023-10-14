import { cardHeroInfos } from '../../data/cardInfos';
// import Blur from './Blur';
import Card from './Card';

function Hero() {
  return (
    <div className="w-full h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center gap-20 translate-y-10 mb-32">
      <h1 className="flex flex-col justify-center items-center text-[5rem] leading-none text-gray-700">
        Não fure a fila,
        <strong>fure a Bubble.</strong>
      </h1>

      <div className="grid grid-cols-3 w-3/4 gap-24 translate-y-10">
        {cardHeroInfos.map((info, index) => (
          <Card
            key={index}
            icon={info.icon}
            title={info.title}
            description={info.description}
            color={info.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
