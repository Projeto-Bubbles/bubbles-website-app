import Member from './Member';
import { members } from '../../data/members';

function Team() {
  return (
    <div className="w-screen flex flex-col justify-center items-center gap-20 mb-32">
      <div>
        <h1 className="text-7xl text-zinc-700">Conheça nosso time</h1>
      </div>

      <div className="w-3/4 flex justify-between items-center">
        {members.map((member, index) => (
          <Member
            key={index}
            photo={member.photo}
            name={member.name}
            lastName={member.lastName}
            role={member.role}
            social={member.social}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
