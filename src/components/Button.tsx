import { ButtonProps } from '../interfaces/ComponentsInterfaces';

function Button(props: ButtonProps) {
  return (
    <button
      className={`flex gap-2 ${props.color} items-center rounded-full px-4 py-1 text-gray-700 text-md font-bold uppercase transition duration-300 ease-in-out hover:brightness-90 group`}
    >
      {props.icon && <span>{props.icon}</span>}
      {props.text}
    </button>
  );
}

export default Button;
