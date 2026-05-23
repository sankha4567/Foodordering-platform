const ShimmerCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
    <div className="h-36 bg-gray-200 w-full" />
    <div className="p-3 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-3 bg-gray-200 rounded w-1/4" />
    </div>
  </div>
);

const Shimmer = () => (
  <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="h-14 bg-gray-100 rounded-2xl mb-8 animate-pulse" />
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array(10).fill(null).map((_, i) => <ShimmerCard key={i} />)}
    </div>
  </div>
);

export default Shimmer;
