import Blur from './Blur';

function Hero() {
  return (
    <div className="h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover bg-no-repeat flex flex-col pt-5 items-center">
      <h1 className="flex flex-col justify-center items-center text-[5rem] pt-40 leading-none text-gray-700">
        Não fure a fila,
        <strong>fure a Bubble.</strong>
      </h1>

      <Blur />
    </div>
  );
}

export default Hero;
