import { Calendar, ChatTeardrop, User } from 'phosphor-react';
import { AccountCard } from '../common/AccountCard';
import Navbar from '../common/Navbar';
import Profile from '../common/Profile';

function Account() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cover flex justify-center items-start ">
        <div className="mt-24 w-3/4 flex flex-col items-center gap-10">
          <Profile />

          <div className="w-full bg-red grid grid-cols-1 lg:grid-cols-[27%_37%_30%] gap-[3%] ">
            <AccountCard
              title="Sobre mim"
              icon={<User size={16} color="#F1F5F9" weight="duotone" />}
              background="bg-slate-900"
            >
              <p className="text-slate-100 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                officia voluptate laboriosam reiciendis, qui facere. Nesciunt
              </p>
            </AccountCard>

            <AccountCard
              title="Eventos próximos"
              icon={<Calendar size={16} color="#423F46" weight="duotone" />}
              background="bg-zinc-300"
            >
              <p className="text-slate-100 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                officia voluptate laboriosam reiciendis, qui facere. Nesciunt
              </p>
            </AccountCard>

            <AccountCard
              title="Bolhas"
              icon={<ChatTeardrop size={16} color="#423F46" weight="duotone" />}
              background="bg-zinc-300"
            >
              <p className="text-slate-100 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                officia voluptate laboriosam reiciendis, qui facere. Nesciunt
              </p>
            </AccountCard>
          </div>
        </div>
      </main>
    </>
  );
}

export default Account;
