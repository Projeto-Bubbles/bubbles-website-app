export function SkeletonBubbleCard() {
  return (
    <div className="h-68 bg-zinc-200 rounded-2xl flex flex-col justify-between items-center mb-6 animate-pulse">
      <div className="w-full h-[170px] flex flex-col justify-start items-center p-6 gap-6">
        <div className="w-full flex justify-between items-center">
          <div className="bg-gray-300 h-7 w-24 rounded-lg" />
          <div className="bg-gray-300 h-6 w-14 rounded-full" />
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-2">
          <div className="bg-gray-300 h-6 w-40 rounded-full" />
          <div className="bg-gray-300 h-4 w-full rounded-full" />
          <div className="bg-gray-300 h-4 w-3/4 rounded-full" />
        </div>
      </div>

      <div className="w-full h-[100px] flex justify-center items-center relative overflow-hidden translate-y-5">
        <div className="w-full h-full rounded-[40px] bg-gray-300 absolute translate-x-72 opacity-50" />
        <div className="w-full h-full rounded-[40px] bg-gray-300" />
      </div>
    </div>
  );
}
