import { Chat } from '../common/Chat';

export function MyBubbles() {
  return (
    <main className="w-full h-screen bg-slate-100 grid grid-cols-[7%_72%_21%]">
      <div className="bg-red-100">
        <Chat.Sidebar />
      </div>
      <div className="bg-blue-100">chat</div>
      <div className="bg-yellow-50">chat details</div>
    </main>
  );
}
