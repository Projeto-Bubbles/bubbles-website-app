export function SkeletonEventStory() {
  return (
    <div className="h-full w-28 bg-gray-200 animate-pulse flex flex-col justify-center items-end rounded-full relative overflow-hidden">
      {/* Informações do Evento (Placeholder) */}
      <div className="w-full bg-gradient-to-t from-gray-300 to-gray-400 flex flex-col justify-end items-start gap-2 h-full pl-4 pb-20 absolute">
        <div className="w-12 h-12 bg-gray-400 rounded animate-pulse" />
        <div className="w-16 h-4 bg-gray-400 rounded animate-pulse" />
        <div className="w-14 h-4 bg-gray-400 rounded animate-pulse" />
        <div className="w-16 h-3 bg-gray-400 rounded animate-pulse" />
      </div>
    </div>
  );
}
