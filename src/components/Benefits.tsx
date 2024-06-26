import Card from './common/Card';
import { cardBenefitsInfo } from '../data/cardInfos';
import Button from './common/Button';
import { useNavigate } from 'react-router-dom';

function Benefits() {
  const navigate = useNavigate();

  return (
    <div
      id="benefits"
      className="w-full flex justify-center items-center pt-44"
    >
      <div className="bg-slate-950 w-3/4 h-96 p-12 flex flex-row justify-around items-center gap-12 rounded-xl">
        <div className="w-3/4 h-full grid grid-cols-3 gap-8">
          {cardBenefitsInfo.map((info, index) => (
            <Card
              key={index}
              icon={info.icon}
              title={info.title}
              description={info.description}
              color={info.color}
            />
          ))}
        </div>
        <div className="w-1/4 p-2 flex flex-col justify-center items-start gap-10">
          <h1 className="text-slate-100 font-regular text-5xl leading-10">
            Vantangens de entrar na bolha
          </h1>
          <Button text="ENTRAR NA BOLHA" color="bg-slate-800" isLight onClick={() => navigate('/selection')}/>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
