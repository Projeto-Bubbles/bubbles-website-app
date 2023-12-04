import { ArrowRight } from 'phosphor-react';
<<<<<<< HEAD
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import { bubbles } from '../../data/bubbles';
import { useEffect, useState } from 'react';
=======
>>>>>>> 154edc343323839b2b80520e03620d54f2c166e3
import { useNavigate } from 'react-router-dom';
import { bubbles } from '../../data/bubbles';
import useBubbles from '../../hooks/useBubbles';
import { BubbleProps } from '../../interfaces/bubble';
import { Bubble } from '../common/Bubble';
import Button from '../common/Button';

function SelectionBubbles() {
  const navigate = useNavigate();

  const bubblesList: BubbleProps[] = bubbles(32);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );

  const { selectedBubbles, toggleBubble } = useBubbles(userBubbles);

  const saveBubblesList = () => {
    if (selectedBubbles.length >= 3) {
      navigate('/feed');
    } else {
      localStorage.removeItem('bubbles');
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-[url('../../src/assets/bubbles-effect.png')] bg-cover flex justify-center items-center overflow-hidden">
        <div className="w-3/4 flex justify-between items-center">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="w-10 h-10 p-2 grid place-content-center bg-blue-200 rounded-full">
              <ArrowRight size={28} color="#3f3f46" weight="duotone" />
            </div>

            <h1 className="text-8xl text-zinc-700 leading-none w-32">
              Escolha suas bolhas.
            </h1>

            <span
              className={`text-zinc-700 font-medium bg-slate-300 rounded-full px-2 uppercase transition duration-300 ease-in-out mt-4 ${
                selectedBubbles.length < 3 ? 'opacity-100 ' : 'opacity-0'
              }`}
            >
              Selecione no mínimo 3 bolhas
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-8 translate-y-14">
            <div className="grid grid-cols-4 gap-4">
              {bubblesList.map((bubble, index) => (
                <div key={index} onClick={() => toggleBubble(bubble)}>
                  <Bubble.Picker
                    name={bubble.name}
                    icon={bubble.icon}
                    color={bubble.color}
                    selected={userBubbles.some((b) => b.name === bubble.name)}
                  />
                </div>
              ))}
            </div>

            <div className="w-2/4 flex flex-col justify-center items-center gap-2">
              <Button
                onClick={saveBubblesList}
                text="Selecionar bolhas"
                color="bg-blue-200"
                disabled={selectedBubbles.length < 3}
                icon={<ArrowRight size={16} color="#3f3f46" weight="duotone" />}
              />
            </div>
          </div>
        </div>
        <div className="bg-violet-200 blur-[200px] w-[700px] h-[700px] rounded-full absolute -z-50 -left-60"></div>
        <div className="bg-blue-100 blur-[200px] w-[700px] h-[700px] rounded-full absolute -z-50 -right-60"></div>
      </div>
    </>
  );
}

export default SelectionBubbles;
