import { SocialButtonProps } from '../../interfaces/ComponentsInterfaces';

function SocialButton(props: SocialButtonProps) {
  return (
    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-300 hover:brightness-75 cursor-pointer transition duration-300 ease-in-out">
      <a className='hover: transition duration-300 ease-in-out' href={props.link}>{props.icon}</a>
    </div>
  );
}

export default SocialButton;
