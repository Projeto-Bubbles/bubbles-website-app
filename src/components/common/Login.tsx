import React, { ReactNode, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { ArrowRight, EnvelopeSimple, Eye, EyeClosed } from 'phosphor-react';

function Login() {
  const [isClicked, setIsClicked] = useState(false);

  const togglePasswordVisibility = (): ReactNode => {
    return isClicked ? (
      <Eye size={16} color="#423F46" weight="duotone" onClick={() => setIsClicked(!isClicked)}/>
    ) : (
      <EyeClosed size={16} color="#423F46" weight="duotone" onClick={() => setIsClicked(!isClicked)}/>
    );
  };

  return (
    <div className="w-3/64 h-screen p-10 flex flex-col justify-center items-center gap-1 ">
      <div className="w-96 h-96 bg-slate-200 flex flex-col justify-center items-center rounded-md">
        <div className="w-96 h-52 bg-zinc-300 flex flex-col rounded-t-md">
          <div className="ml-6 mt-4">
            <div className="w-8 h-8 p-2 grid place-content-center bg-blue-200 rounded-full">
              <ArrowRight size={20} color="#3f3f46" weight="duotone" />
            </div>
            <h1 className="text-xl font-bold"> Bem vindo de volta! </h1>
            <h2 className="text-lg">
              {' '}
              Ainda não furou a bolha?{' '}
              <a href="" className="underline">
                Cadastre-se
              </a>
            </h2>
          </div>
        </div>
        <div className="w-96 h-full bg-zinc-400 rounded-b-md flex items-center justify-center">
          <div className="w-[80%] flex flex-col items-center justify-center gap-3">
            <Input
              icon={
                <EnvelopeSimple size={16} color="#423F46" weight="duotone" />
              }
              type={'email'}
              placeholder={'john.doe@bubble.com'}
            />

            <Input
              icon={togglePasswordVisibility()}
              type={isClicked ? 'text' : 'password'}
              placeholder={'******'}
            />
            <h1 className="text-base">
              Esqueceu a senha ? <a href="" className="underline"> Recuperar </a>
            </h1>
            <Button text="Entrar" color="bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
