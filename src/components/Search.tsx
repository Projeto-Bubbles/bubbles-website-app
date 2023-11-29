import { MagnifyingGlass, Plus } from 'phosphor-react';
import { ReactNode } from 'react';
import { bubbles } from '../data/bubbles';
import { Bubble } from './common/Bubble';
import Input from './common/Fields/Input';

interface SearchProps {
  title: string;
  placeholder: string;
  children: ReactNode;
  isOpenModal?: () => void;
}

function Search({ title, placeholder, children, isOpenModal }: SearchProps) {
  const bubblesTag = bubbles(12);

  return (
    <div className="w-4/5 pt-28 m-auto flex flex-col">
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

          <button
            aria-label="Botão de criar"
            className="w-8 h-8 rounded-full bg-zinc-300 grid place-content-center"
            onClick={isOpenModal}
          >
            <Plus size={12} weight="bold" color="#3f3f46" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-4">
          {bubblesTag.map((tag, index) => (
            <Bubble.Tag
              key={index}
              icon={tag.icon}
              name={tag.name}
              color={tag.color}
            />
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-10">{children}</div>
    </div>
  );
}

export default Search;
