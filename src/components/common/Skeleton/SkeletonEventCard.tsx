export function SkeletonEventCard() {
  return (
    <div className="bg-gray-200 w-4/4 rounded-2xl flex justify-start items-center gap-10 animate-pulse">
      <div className="w-3/12 h-[280px] rounded-2xl bg-gray-300"></div>

      <div className="w-7/12 h-full flex flex-col justify-between items-start py-6">
        <div className="w-full flex flex-col justify-between items-start leading-none gap-2">
          <div className="w-full flex justify-between items-center">
            <div className="bg-gray-300 h-8 w-28 rounded-lg" />
            <div className="bg-gray-300 h-4 w-14 rounded-full" />
          </div>

          <div>
            <div className="bg-gray-300 h-6 w-48 rounded-full mb-2" />
            <div className="bg-gray-300 h-4 w-32 rounded-full" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="bg-gray-300 h-4 w-full rounded-full"></div>
          <div className="bg-gray-300 h-4 w-20 rounded-full"></div>
          <div className="bg-gray-300 h-4 w-20 rounded-full"></div>
        </div>

        <div className="bg-gray-300 h-10 w-full rounded-full" />
      </div>
    </div>
  );
}
