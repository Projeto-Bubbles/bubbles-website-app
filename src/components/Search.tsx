import { MagnifyingGlass } from 'phosphor-react';
import Input from './common/Input';
import { ReactNode } from 'react';

interface SearchProps {
  title: string;
  placeholder: string;
  children: ReactNode;
}

function Search({ title, placeholder, children }: SearchProps) {
  return (
    <div className="w-4/5 pt-28 m-auto">
      <div className="w-2/4 flex flex-col justify-center items-center gap-4 m-auto mb-20">
        <h1 className="text-zinc-700 text-4xl font-medium">{title}</h1>
        <Input
          icon={<MagnifyingGlass size={16} color="#423F46" weight="duotone" />}
          type="text"
          placeholder={placeholder}
        />
      </div>

      <div className="w-full grid grid-cols-4 gap-10">{children}</div>
    </div>
  );
}

export default Search;
