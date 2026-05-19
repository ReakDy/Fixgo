const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white/5 p-6 rounded-2xl border border-white/10">

      <div className="h-6 bg-white/10 rounded w-1/2 mb-4"></div>

      <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
      <div className="h-4 bg-white/10 rounded w-3/4"></div>

      <div className="h-10 bg-white/10 rounded mt-6 w-1/3"></div>

    </div>
  );
};

export default SkeletonCard;