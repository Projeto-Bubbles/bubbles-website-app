import { ArrowRight } from 'phosphor-react';
import { UseForm } from '../../hooks/useForm';
import { Sign } from '../common/Sign';

function SignPage() {
  const formComponents = [
    <Sign.StepOne />,
    <Sign.StepTwo />,
    <Sign.StepThree />,
  ];

  const {
    currentStep,
    currentComponnent,
    changeStep,
    isLastStep,
    isFirstStep,
  } = UseForm(formComponents);
  return (
    <div className="w-screen h-screen p-10 flex flex-col justify-center items-center gap-1 ">
      <div className="w-96 flex flex-col justify-center items-center rounded-md">
        <div className="w-96 h-32 bg-zinc-200 flex flex-col rounded-t-md">
          <div className="ml-6 mt-4">
            <div className="w-8 h-8 p-2 grid place-content-center bg-blue-100 rounded-full">
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

        <div className="w-96 min-h-fit p-6 bg-zinc-300 rounded-b-md flex items-center justify-center">
          <form
            className="flex flex-col items-center justify-between h-full gap-6 w-full"
            onSubmit={(e) => changeStep(currentStep + 1, e)}
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
