import { ArrowRight } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { UseForm } from '../../hooks/useForm';
import { BubbleProps } from '../../interfaces/bubble';
import { User } from '../../interfaces/user';
import BackButton from '../common/BackButton';
import { Sign } from '../common/Sign';
import { api } from '../../utils/axios';

function SignPage() {
  const [data, setData] = useState<User>({} as User);

  const updateFieldHandler = (key: string, value: any) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <Sign.StepOne />,
    <Sign.StepTwo data={data} updateFieldHandler={updateFieldHandler} />,
    <Sign.StepThree data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const {
    currentStep,
    currentComponnent,
    changeStep,
    isLastStep,
    isFirstStep,
  } = UseForm(formComponents);

  const registerUser = async () => {
    const userBubbles: BubbleProps[] = JSON.parse(
      localStorage.getItem('bubbles') || '[]'
    );

    const postData = {
      ...data,
      // bubbles: userBubbles,
    };

    try {
      const response = await api.post('/auth/register', JSON.stringify(postData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Cadastro realizado');
      }
    } catch (error) {
      console.error(error);
      console.log(postData);
      alert('ERRO!');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isLastStep) {
      registerUser();
    } else {
      changeStep(currentStep + 1, e);
    }
  };

  return (
    <div className="w-screen h-screen p-10 flex flex-col justify-center items-center gap-1 ">
      <div className="w-96 flex flex-col justify-center items-center rounded-md relative">
        {!isFirstStep && (
          <div className=" bg-red-800">
            <BackButton onClick={() => changeStep(currentStep - 1)} />
          </div>
        )}
        <div className="w-96 h-32 bg-zinc-200 flex flex-col justfiy-center items-startrounded-t-md">
          <div className="ml-6 mt-4">
            <div className="w-8 h-8 p-2 grid place-content-center bg-blue-100 rounded-full">
              <ArrowRight size={20} color="#3f3f46" weight="duotone" />
            </div>
            <h1 className="text-3xl font-bold text-zinc-700">
              Vamos furar a bolha!{' '}
            </h1>
            <h2 className="text-lg">
              Já tem conta?{' '}
              <a href="" className="underline">
                Entrar
              </a>
            </h2>
          </div>
        </div>

        <div className="w-96 min-h-fit p-6 bg-zinc-300 rounded-b-md flex items-center justify-center transition-all duration-300 ease-in-out">
          <form
            className="flex flex-col items-center justify-between h-full gap-6 w-full"
            onSubmit={handleSubmit}
          >
            <div className="w-full">{currentComponnent}</div>

            <div className="w-full">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <span>Voltar</span>
                </button>
              )}
              <button
                className="relative w-full bg-zinc-700 text-zinc-200 text-sm font-semibold uppercase flex justify-between items-center h-10 rounded-md cursor-pointer group"
                type="submit"
              >
                <div
                  className={`w-full px-4 flex ${
                    isLastStep ? 'justify-center' : 'justify-between'
                  } items-center gap-2 z-10`}
                >
                  {!isLastStep ? (
                    <>
                      <span>Continuar </span>
                      <ArrowRight size={20} color="#F1F5F9" weight="duotone" />
                    </>
                  ) : (
                    'Cadastrar'
                  )}
                </div>

                <div className="w-1 h-10 absolute justify-self-start rounded-md transition-all duration-1000 ease-in-out group-hover:bg-slate-950  group-hover:w-full"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
