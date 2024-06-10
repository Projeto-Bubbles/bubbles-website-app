export function SkeletonPost() {
  return (
    <div className="bg-zinc-200 w-full flex flex-col gap-4 rounded-lg p-6 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="w-3/4 flex justify-start gap-3 items-center">
          <div className="size-8 bg-gray-300 rounded-full" />
          <div className="bg-gray-300 h-4 w-24 rounded-full" />

          <div className="flex gap-2 justify-start items-center">
            <div className="bg-gray-300 h-4 w-16 rounded-full" />

            <div className="size-2 bg-gray-300 rounded-full" />

            <div className="bg-gray-300 h-4 w-8 rounded-full" />

            <div className="size-2 bg-gray-300 rounded-full" />

            <div className="bg-gray-300 h-4 w-8 rounded-full" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="bg-gray-300 h-4 w-full rounded-full" />
        <div className="bg-gray-300 h-4 w-full rounded-full" />
        <div className="bg-gray-300 h-4 w-3/4 rounded-full" />
      </div>

      <div className="flex justify-between items-center">
        <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
      </div>
    </div>
  );
}
