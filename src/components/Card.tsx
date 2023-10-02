import { CardProps } from '../interfaces/ComponentsInterfaces';

function Card(props: CardProps) {
  return (
    <div className="bg-gray-700 text-slate-100 flex flex-col gap-4 justify-start p-6 rounded-md h-[200px] transition-all ease-out duration-500 group hover:bg-slate-800">
      {props.icon && (
        <div className="bg-gray-600/50 w-10 h-10 rounded-lg rounded-br-2xl flex justify-center items-center transition-all ease-out duration-500 group-hover:bg-slate-700">
          {props.icon}
        </div>
      )}

      <div>
        <h1 className="text-2xl uppercase font-semibold">{props.title}</h1>
        <p className="text-lg leading-none">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
