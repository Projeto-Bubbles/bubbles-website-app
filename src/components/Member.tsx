import { LinkedinLogo } from 'phosphor-react';

interface MemberProps {
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
    <div className="w-16 rounded-full bg-slate-300">
      <div>
        <div>
          <img src={props.photo} alt={props.name + props.lastName} />
        </div>

        <div>
          <h2>
            {props.name} <br /> <strong>{props.lastName}</strong>
          </h2>
          <p>{props.role}</p>
        </div>
      </div>

      <div>
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-300">
          <a href={props.social.linkedin}>
            <LinkedinLogo size={16} color="#3f3f46" weight="duotone" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Member;
