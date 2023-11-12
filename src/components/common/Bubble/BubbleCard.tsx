import { Users } from 'phosphor-react';

function BubbleCard() {
  return (
    <div className="w-72 h-60 bg-zinc-200 text-zinc-700 rounded-lg flex flex-col justify-between items-center group mb-6">
      <div className="w-full h-3/5 flex flex-col justify-start items-center px-6 py-4 gap-4">
        <div className="w-full flex justify-between items-center">
          tag
          <div className="w-14 flex justify-end items-center gap-2">
            <Users size={16} color="#423F46" weight="duotone" />
            <span className="font-bold">4k</span>
          </div>
        </div>

        <div className="w-full">
          <h1 className="font-bold text-xl leading-none">Title</h1>
          <p className="text-base font-medium leading-none">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            amet quasi molestiae, necessitatibus maxime facilis voluptate
            inventore.
          </p>
        </div>
      </div>

      <div className="w-full h-[100px] flex justify-center items-center relative overflow-hidden translate-y-5">
        <button className="bg-slate-400/70 font-bold uppercase backdrop-blur-lg flex justify-around items-center rounded-full p-1 translate-x-52 absolute transition duration-300 ease-in-out group-hover:translate-x-32">
          Entrar
        </button>
        <img
          src="https://images.pexels.com/photos/16776919/pexels-photo-16776919/free-photo-of-pavimento-calcamento-vespa-estacionario.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover object-center rounded-[40px]"
        />
      </div>
    </div>
  );
}

export default BubbleCard;
