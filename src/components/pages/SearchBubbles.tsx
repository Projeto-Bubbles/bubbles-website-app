import { MagnifyingGlass } from 'phosphor-react';
import { Bubble } from './../common/Bubble/index';
import Input from './../common/Input';

function SearchBubbles() {
  return (
    <div className="w-3/4 pt-28 m-auto">
      <div className="w-2/4 flex flex-col justify-center items-center gap-4 m-auto mb-20">
        <h1 className="text-zinc-700 text-4xl font-medium">
          Encontre suas bolhas favoritas aqui
        </h1>
        <Input
          icon={<MagnifyingGlass size={16} color="#423F46" weight="duotone" />}
          type="text"
          placeholder="Pesquisar bolhas..."
        />
      </div>

      <Bubble.Card />
    </div>
  );
}

export default SearchBubbles;
