import { CDN_URL } from "../utils/constants";

const RestrurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString } =
    resData?.info;

  return (
    <div
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-100 h-full"
      data-testid="resCard"
    >
      <div className="relative">
        <img
          className="w-full h-36 object-cover"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
        {costForTwo && (
          <span className="absolute bottom-2 left-2 text-white text-xs font-semibold">
            {costForTwo}
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-sm truncate">{name}</h3>
        <p className="text-gray-500 text-xs truncate mt-0.5">{cuisines?.join(", ")}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-1.5 py-0.5 rounded">
            ★ {avgRating}
          </span>
          {slaString && (
            <span className="text-xs text-gray-500">{slaString}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestrurantCard) => {
  return (props) => (
    <div className="relative h-full">
      <span className="absolute top-2 left-2 z-10 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">
        Promoted
      </span>
      <RestrurantCard {...props} />
    </div>
  );
};

export default RestrurantCard;
