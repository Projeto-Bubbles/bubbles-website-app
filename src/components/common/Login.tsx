import React, { ReactNode, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { ArrowRight, EnvelopeSimple, Eye, EyeClosed } from 'phosphor-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    const data = getValues();
    console.log('👽 ~ data:', data);

    return axios
      .post('http://localhost:8080/auth/login', data)
      .then((response) => {
        navigate('/feed');
        sessionStorage.setItem('token', JSON.stringify(response.data));
        alert('✅ Login bem sucedido!');
      })
      .catch((err) => {
        alert('⚠️ Usuário ou senha incorretos');
        console.log(err);
      });
  };

  const togglePasswordVisibility = (): ReactNode => {
    return isClicked ? (
      <Eye
        size={16}
        color="#423F46"
        weight="duotone"
        onClick={() => setIsClicked(!isClicked)}
      />
    ) : (
      <EyeClosed
        size={16}
        color="#423F46"
        weight="duotone"
        onClick={() => setIsClicked(!isClicked)}
      />
    );
  };

  return (
    <div className="w-screen h-screen p-10 flex flex-col justify-center items-center gap-1 ">
      <div className="w-96 h-96 flex flex-col justify-center items-center rounded-md">
        <div className="w-96 h-52 bg-zinc-200 flex flex-col rounded-t-md">
          <div className="ml-6 mt-4">
            <div className="w-8 h-8 p-2 grid place-content-center bg-blue-200 rounded-full">
              <ArrowRight size={20} color="#3f3f46" weight="duotone" />
            </div>
            <h1 className="text-xl font-bold"> Bem vindo de volta! </h1>
            <h2 className="text-lg">
              Ainda não furou a bolha?{' '}
              <a href="" className="underline">
                Cadastre-se
              </a>
            </h2>
          </div>
        </div>
        <div className="w-96 h-full bg-zinc-400 rounded-b-md flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[80%] flex flex-col items-center justify-center gap-3"
          >
            <input
              // icon={
              //   <EnvelopeSimple size={16} color="#423F46" weight="duotone" />
              // }
              type={'email'}
              placeholder={'monteiro.lobato@bubble.com'}
              {...register('email')}
            />

            <input
              // icon={togglePasswordVisibility()}
              type={isClicked ? 'text' : 'password'}
              placeholder={'******'}
              {...register('password')}
            />
            <h1 className="text-base">
              Esqueceu a senha ?{' '}
              <a href="" className="underline">
                {' '}
                Recuperar{' '}
              </a>
            </h1>
            <Button text="Entrar" color="bg-zinc-800" isLight />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;