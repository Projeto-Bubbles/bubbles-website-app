import { Pencil, Trash } from 'phosphor-react';

export interface PopupProps {
  onEdit: () => {};
  onDelete: () => {};
}

function Popup({ onEdit, onDelete }: PopupProps) {
  return (
    <div className="bg-zinc-300 w-20 flex flex-col justify-center items-center gap-2 rounded-md">
      <span
        onClick={() => onEdit}
        role="editar"
        className="w-[90%] text-zinc-700 flex justify-start items-center gap-2 px-1 py-[2px] rounded-md transition duration-200 ease-in-out cursor-pointer hover:bg-zinc-400/20"
      >
        <Pencil size={16} color="#334141" weight="duotone" />
        Editar
      </span>
      <span
        onClick={() => onDelete}
        role="excluir"
        className="w-[90%] text-zinc-700 flex justify-start items-center gap-2 px-1 py-[2px] rounded-md transition duration-200 ease-in-out cursor-pointer hover:bg-slate-400/20"
      >
        <Trash size={16} color="#334141" weight="duotone" />
        Excluir
      </span>
    </div>
  );
}

export default Popup;
