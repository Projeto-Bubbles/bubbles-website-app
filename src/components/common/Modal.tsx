import { MouseEvent, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    // Impede a propagação do evento para o contêiner do modal
    event.stopPropagation();
  };

  return (
    <div
      className="bg-black/25 backdrop-blur-lg w-screen h-screen absolute z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-zinc-200 w-2/5 flex flex-col justify-center items-center p-8 rounded-md"
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
