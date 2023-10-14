import { SidebarTopicProps } from '../../interfaces/ComponentsInterfaces';

function SidebarTopic(props: SidebarTopicProps) {
  return (
    <button
      className={`w-max p-2 pr-3 rounded-full flex justify-between items-center ${
        props.isLogout
          ? 'bg-slate-800 hover:bg-slate-900'
          : 'bg-zinc-300/30 hover:bg-zinc-300/60'
      }  transition duration-300 ease-out hover:translate-x-1`}
    >
      <div
        className={`w-4 h-4 grid place-content-center mr-2 ${
          props.isLogout ? 'bg-blue-200/10' : 'bg-zinc-300'
        } p-3 rounded-full`}
      >
        {props.icon}
      </div>
      <h3
        className={`${
          props.isLogout ? 'text-[#B1C5E1]' : 'text-zinc-700'
        } font-semibold text-sm uppercase`}
      >
        {props.text}
      </h3>
    </button>
  );
}

export default SidebarTopic;
