import React, { ReactNode } from 'react';
import { Icon } from 'phosphor-react';

interface ButtonProps {
  text: string;
  color: string;
  icon?: ReactNode; // Permite que você passe um ícone como prop
}

function Button(props: ButtonProps) {
  return (
    <button
      className={`flex gap-2 ${props.color} items-center rounded-full px-4 py-1 text-gray-700 text-md font-bold uppercase`}
    >
      {props.icon && <span>{props.icon}</span>}
      {props.text}
    </button>
  );
}

export default Button;
