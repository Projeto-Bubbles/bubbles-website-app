import SocialButton from './SocialButton';
import { icons } from '../../utils/constants';

export interface MemberProps {
  photo: string;
  name: string;
  lastName: string;
  role: string;
  social: {
    linkedin: string;
    instagram: string;
    github: string;
    email: string;
  };
}

function Member(props: MemberProps) {
  return (
    <div className="w-64 flex flex-col justify-center items-center gap-1 group">
      <div className="w-3/4 h-96 rounded-full bg-slate-300 z-10 transition-all ease-in-out duration-300 group-hover:w-full flex-row justify-center items-center relative overflow-hidden group">
        <div className="h-full">
          <img
            src={props.photo}
            alt={props.name + props.lastName}
            className="w-[700px] h-full object-cover transition-all ease-in-out duration-300"
          />
        </div>
        <div className="w-full h-1/4 absolute bottom-0 bg-slate-100/50 rounded-tr-[60px] pt-2 pl-14 opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100 backdrop-blur-xl">
          <h1 className="text-2xl leading-none">
            {props.name} <br /> <strong>{props.lastName}</strong>
          </h1>
          <p className="text-xs uppercase tracking-widest font-bold">
            {props.role}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100 pt-2">
        {Object.values(props.social).map((value, index) => (
          <div
            key={index}
            className={`${index === 0 || index === 3 ? 'self-start mb-8' : ''}`}
          >
            <SocialButton icon={icons[index]} link={value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Member;
