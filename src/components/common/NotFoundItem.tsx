import { MagnifyingGlass } from 'phosphor-react';

interface NotFoundItem {
  errorMessage: string;
  disclaimer: string;
}

export function NotFoundItem({ errorMessage, disclaimer }: NotFoundItem) {
  console.log('👽 ~ NotFoundItem:', NotFoundItem);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div className="bg-slate-100/10 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-center items-center gap-2">
        <div className="size-10 bg-red-400 rounded-lg grid place-content-center mb-2 ">
          <MagnifyingGlass size={24} color="#fef1f1" weight="duotone" />
        </div>

        <h1 className="font-bold text-zinc-700 text-3xl leading-none">
          {errorMessage}
        </h1>

        <h2 className="font-medium text-zinc-600 text-2xl leading-none">
          {disclaimer}
        </h2>
      </div>
    </div>
  );
}
