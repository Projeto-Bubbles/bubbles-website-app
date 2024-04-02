import { MagnifyingGlass, Plus } from 'phosphor-react';
import { ReactNode } from 'react';
import Button from './common/Button';
import Input from './common/Fields/Input';

interface SearchProps {
  title: string;
  placeholder: string;
  children: ReactNode;
  isOpenModal?: () => void;
  onChange: (e: any) => void;
}

function Search({
  title,
  placeholder,
  children,
  isOpenModal,
  onChange,
}: SearchProps) {
  return (
    <div className="w-10/12 pt-28 m-auto flex flex-col">
      <div className="w-full flex flex-col justify-center items-center gap-4 m-auto mb-20">
        <h1 className="text-zinc-700 text-4xl font-medium">{title}</h1>
        <div className="w-2/4 flex justify-center items-center gap-4">
          <Input
            icon={
              <MagnifyingGlass size={16} color="#423F46" weight="duotone" />
            }
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />

          <div className="w-48">
            <Button
              text="Criar"
              icon={<Plus size={12} weight="bold" color="#3f3f46" />}
              color="bg-zinc-300"
              onClick={isOpenModal}
            />
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export default Search;
