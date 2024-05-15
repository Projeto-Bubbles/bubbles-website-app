import { ArrowRight, EnvelopeSimple, Eye, EyeClosed } from 'phosphor-react';
import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../services/authService';
import { getUserByEmail } from '../../../services/userServices';
import Button from '../Button';
import Input from '../Fields/Input';
import Navbar from './../Navbar';

function SignIn() {
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    const data = getValues();

    setIsDisabled(true);

    toast.promise(loginUser(data), {
      loading: 'Validando autenticação...',
      success: <b>Login bem sucedido!</b>,
      error: <b>Login ou senha incorretos</b>,
    });

    return loginUser(data)
      .then((response) => {
        sessionStorage.setItem('token', JSON.stringify(response.data));

        getUserByEmail(data.email).then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data));
        });

        setTimeout(() => navigate('/feed'), 500);
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };

  const togglePasswordVisibility = (): ReactNode => {
    return isClicked ? (
      <div className="cursor-pointer">
        <Eye
          size={16}
          color="#423F46"
          weight="duotone"
          onClick={() => setIsClicked(!isClicked)}
        />
      </div>
    ) : (
      <div className="cursor-pointer">
        <EyeClosed
          size={16}
          color="#423F46"
          weight="duotone"
          onClick={() => setIsClicked(!isClicked)}
        />
      </div>
    );
  };

  const previousPage = localStorage.getItem('previousPage') ?? '/';

  return (
    <>
      <Toaster />

      <Navbar redirectPage={previousPage} />

      <div className="w-screen h-screen p-10 flex flex-col justify-center items-center gap-1 ">
        <div className="w-96 h-96 flex flex-col justify-center items-center rounded-md">
          <div className="w-96 h-52 bg-zinc-200 flex flex-col rounded-t-md">
            <div className="ml-6 mt-4">
              <div className="w-8 h-8 p-2 grid place-content-center bg-blue-100 rounded-full">
                <ArrowRight size={20} color="#3f3f46" weight="duotone" />
              </div>
              <h1 className="text-xl font-bold"> Bem vindo de volta! </h1>
              <h2 className="text-lg">
                Ainda não furou a bolha?{' '}
                <a href="sign-up" className="underline">
                  Cadastre-se
                </a>
              </h2>
            </div>
          </div>

          <div className="w-96 h-full py-6 bg-zinc-300 rounded-b-md flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[80%] flex flex-col items-center justify-center gap-3"
            >
              <Input
                icon={
                  <EnvelopeSimple size={16} color="#423F46" weight="duotone" />
                }
                type={'email'}
                placeholder={'monteiro.lobato@bubble.com'}
                {...register('email')}
              />

              <Input
                icon={togglePasswordVisibility()}
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

              <Button
                disabled={isDisabled}
                text="Entrar"
                color="bg-zinc-800"
                isLight
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;