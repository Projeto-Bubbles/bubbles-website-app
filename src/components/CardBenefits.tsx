import Card from './Card';
import { cardHeroInfos } from '../data/cardHeroInfos';
import Button from './Button';

function CardBenefits() {
  return (
    <div className='w-full flex justify-center items-center mt-28'>
        <div className="bg-slate-950 w-3/4 h-96 p-12 flex flex-row justify-around items-center gap-12 rounded-xl">
          <div className='w-3/4 gap-12 h-full flex flex-row justify-center items-center '>
              {cardHeroInfos.map((info, index) => (
                <div className='w-1/3 h-full'>
                <Card
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  description={info.description}
                  color={info.color}
                />
                </div>
              ))}
          </div>
          <div className="w-1/4 p-2 flex flex-col justify-center items-start gap-5">
            <h1 className="text-slate-100 font-regular text-5xl leading-10">
              Vantangens de entrar na bolha
            </h1>
            <Button text="ENTRAR NA BOLHA" color="bg-slate-400" />
          </div>
        </div>
    </div>
  );
}

export default CardBenefits;