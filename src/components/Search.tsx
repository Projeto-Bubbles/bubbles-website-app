import { MagnifyingGlass, Plus } from 'phosphor-react';
import { ReactNode } from 'react';
import { bubbles } from '../data/bubbles';
import useBubbles from '../hooks/useBubbles';
import { BubbleProps } from '../interfaces/bubble';
import { Bubble } from './common/Bubble';
import Button from './common/Button';
import Input from './common/Fields/Input';

interface SearchProps {
  title: string;
  placeholder: string;
  children: ReactNode;
  isOpenModal?: () => void;
}

function Search({ title, placeholder, children, isOpenModal }: SearchProps) {
  const bubblesTag = bubbles(12);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );

  const { selectedBubbles, toggleBubble } = useBubbles(userBubbles);

  return (
    <div className="w-10/12 pt-28 m-auto flex flex-col">
      <div className="w-2/4 flex flex-col justify-center items-center gap-4 m-auto mb-20">
        <h1 className="text-zinc-700 text-4xl font-medium">{title}</h1>
        <div className="w-full flex justify-center items-center gap-4">
          <Input
            icon={
              <MagnifyingGlass size={16} color="#423F46" weight="duotone" />
            }
            type="text"
            placeholder={placeholder}
          />

          <div className="w-48">
            <Button
              text="Criar bolha"
              icon={<Plus size={12} weight="bold" color="#3f3f46" />}
              color="bg-zinc-300"
              onClick={isOpenModal}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          {bubblesTag.map((tag, index) => (
            <div
              key={index}
              onClick={() => {
                toggleBubble(tag);
              }}
            >
              <Bubble.Tag
                icon={tag.icon}
                name={tag.name}
                color={tag.color}
                selected={userBubbles.some(
                  (bubble) => bubble.name === tag.name
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-12 place-content-items">
        {children}
      </div>
    </div>
  );
}

export default Search;
