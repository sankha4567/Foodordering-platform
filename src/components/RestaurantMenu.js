import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, cloudinaryImageId, locality } =
    resInfo?.card?.card?.info;

  const categories = resInfo?.card?.Regularitem?.cards?.filter(
    (card) => card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Restaurant Hero */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        {cloudinaryImageId && (
          <div className="relative h-48 bg-gray-100">
            <img
              src={CDN_URL + cloudinaryImageId}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-sm text-gray-200">{locality}</p>
            </div>
          </div>
        )}

        {!cloudinaryImageId && (
          <div className="p-6 pb-2">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          </div>
        )}

        <div className="p-4 flex flex-wrap items-center gap-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            <span>★</span>
            <span>{avgRating}</span>
            <span className="text-green-500 text-xs font-normal">({totalRatingsString})</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">{costForTwoMessage}</span>
          </div>
          <div className="text-sm text-gray-500 italic">
            {cuisines?.join(", ")}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Menu</h2>
        {categories?.map((category, index) => (
          <RestaurantCategories
            key={category.title + index}
            data={category}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
