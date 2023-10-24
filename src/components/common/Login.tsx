import React from 'react';
import Input from './Input';
import Button from './Button';
import {ArrowRight} from 'phosphor-react';

function Login() {
  return (
    <div className="w-3/64 p-10 flex flex-col justify-center items-center gap-1 bg-pink-600">
      <div className="w-96 h-96 bg-slate-200 flex flex-col justify-center items-center rounded-md">
        <div className="w-96 h-52 bg-zinc-300 flex flex-col rounded-t-md">
            <div className='ml-6 mt-4'>
            <div className="w-8 h-8 p-2 grid place-content-center bg-blue-200 rounded-full">
              <ArrowRight size={20} color="#3f3f46" weight="duotone" />
            </div>
          <h1 className='text-xl font-bold'> Bem vindo de volta! </h1>
          <h2 className='text-lg'> Ainda não furou a bolha? <a href='' className='underline'>Cadastre-se</a></h2>
          </div>
        </div>
        <div className="w-96 h-full bg-zinc-400 rounded-b-md flex items-center justify-center">
          <div className="w-[80%] flex flex-col items-center justify-center gap-3">
            <input
              type={'email'}
              value={'email'}
              placeholder={'Email'}
              className="w-full bg-slate-100/80 text-zinc-700 text-lg font-medium p-[.4rem] rounded-md pl-9 border-none outline-1 outline-slate-400/0 transition-all duration-300 ease-in-out focus:outline-slate-500"
            />

            <input
              type={'password'}
              value={'senha'}
              placeholder={'senha'}
              className="w-full bg-slate-100/80 text-zinc-700 text-lg font-medium p-[.4rem] rounded-md pl-9 border-none outline-1 outline-slate-400/0 transition-all duration-300 ease-in-out focus:outline-slate-500"
            />
            <h1 className='text-base'> Esqueceu a senha ? <a href='' className='underline'>Recuperar</a></h1>
            <Button
              text="Entrar"
              color="bg-zinc-800"
            />
          </div>    
        </div>
      </div>
    </div>
  );
}

export default Login;
