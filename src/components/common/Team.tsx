import Member from './Member';
import { members } from '../../data/members';

function Team() {
  return (
    <div className="w-screen flex justify-center flex-col gap-4 items-center pt-28">
      <div>
        <h1>Conheça nosso time</h1>
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
