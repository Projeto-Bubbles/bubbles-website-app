import SocialButton from './SocialButton';
import { MemberProps } from '../interfaces/ComponentsInterfaces';
import { icons } from '../utils/constants';

function Member(props: MemberProps) {
  return (
    <div className="w-64 flex flex-col justify-center items-center gap-1 group">
      <div className="w-3/4 h-96 rounded-full bg-slate-300 z-10 transition-all ease-in-out duration-300 hover:w-full flex-row justify-center items-center relative overflow-hidden group">
        <div className="h-full">
          <img src={props.photo} alt={props.name + props.lastName}  className="w-[700px] h-full object-cover group-hover:scale-150 group-hover:translate-y-20 transition-all ease-in-out duration-300"/>
        </div>
        <div className="w-full h-1/4 absolute bottom-0 bg-slate-100/50 rounded-tr-[60px] pt-2 pl-14 opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100 backdrop-blur-xl">
          <h1 className="text-2xl leading-none">
            {props.name} <br /> <strong>{props.lastName}</strong>
          </h1>
          <p className="text-xs uppercase tracking-widest">{props.role}</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100">
        {Object.values(props.social).map((value, index) => (
          <SocialButton key={index} icon={icons[index]} link={value} />
        ))}
      </div>
    </div>
  );
}

export default Member;
