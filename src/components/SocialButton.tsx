import { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  link: string 
}

function SocialButton(props: SocialButtonProps) {
  return (
    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-300">
      <a href={props.link}>
        {props.icon}
      </a>
    </div>
  );
}

export default SocialButton;
