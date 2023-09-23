import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

function Card(props: CardProps) {
  return (
    <div className='bg-gray-500 text-slate-100 flex flex-col gap-4 justify-start p-6 rounded-md h-[280px]'>
      {props.icon && (
        <div className='bg-gray-400 w-10 h-10 rounded-lg rounded-br-2xl flex justify-center items-center'>
          {props.icon}
        </div>
      )}

      <div>
        <h1 className='text-2xl uppercase font-semibold'>{props.title}</h1>
        <p className='text-lg leading-none'>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
