import { ArrowRight } from 'phosphor-react';
import Navbar from '../common/Navbar';
import Button from '../common/Button';
import { Bubble } from '../../interfaces/ComponentsInterfaces';
import { bubbles } from '../../data/bubbles';
import { useEffect, useState } from 'react';
import BubblePicker from '../common/BubblePicker';
import { useNavigate } from 'react-router-dom';

function SelectionBubbles() {
  const navigate = useNavigate();

  const bubblesList: Bubble[] = bubbles(32);

  const [selectedBubbles, setSelectedBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    console.log(selectedBubbles);
  }, [selectedBubbles]);

  const toggleBubble = (bubble: Bubble) => {
    if (selectedBubbles.some((b) => b.name === bubble.name)) {
      setSelectedBubbles(
        selectedBubbles.filter((element) => element.name !== bubble.name)
      );
    } else {
      setSelectedBubbles([...selectedBubbles, bubble]);
    }
  };

  const saveBubblesList = () => {
    if (selectedBubbles.length > 0) navigate('/feed');
  };

  return (
    <>
      <Navbar withMenu={false} />

      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-3/4 flex justify-between items-center">
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="w-10 h-10 p-2 grid place-content-center bg-blue-200 rounded-full">
              <ArrowRight size={28} color="#3f3f46" weight="duotone" />
            </div>

            <h1 className="text-8xl text-zinc-700 leading-none w-32">
              Escolha suas bolhas.
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-8 translate-y-14">
            <div className="grid grid-cols-4 gap-4">
              {bubblesList.map((bubble, index) => (
                <div key={index} onClick={() => toggleBubble(bubble)}>
                  <BubblePicker
                    name={bubble.name}
                    icon={bubble.icon}
                    color={bubble.color}
                  />
                </div>
              ))}
            </div>

            <Button
              onClick={saveBubblesList}
              text="Selecionar bolhas"
              color="bg-blue-200"
              icon={<ArrowRight size={16} color="#3f3f46" weight="duotone" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectionBubbles;
