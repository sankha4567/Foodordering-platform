import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddButton = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-100">
      {items?.map((item) => {
        const info = item.card.info;
        const price = info.price ? info.price / 100 : info.defaultPrice / 100 || 0;
        const isVeg = info.itemAttribute?.vegClassifier === "VEG";

        return (
          <div key={info.id} className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors">
            {/* Veg / Non-veg indicator */}
            <div className="shrink-0 mt-1">
              <div className={`w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${isVeg ? "border-green-600" : "border-red-600"}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isVeg ? "bg-green-600" : "bg-red-600"}`} />
              </div>
            </div>

            {/* Item details */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-gray-900 leading-snug">{info.name}</p>
              <p className="text-sm font-medium text-gray-700 mt-0.5">₹ {price.toFixed(0)}</p>
              {info.description && (
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{info.description}</p>
              )}
            </div>

            {/* Image + Add button */}
            <div className="shrink-0 relative w-24 h-20">
              {info.imageId ? (
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-24 h-20 object-cover rounded-xl"
                />
              ) : (
                <div className="w-24 h-20 bg-gray-100 rounded-xl" />
              )}
              <button
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 border-2 border-green-500 text-xs font-bold px-4 py-0.5 rounded-lg shadow hover:bg-green-500 hover:text-white transition-colors whitespace-nowrap"
                onClick={() => handleAddButton(item)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
