import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors text-left"
        onClick={setShowIndex}
      >
        <span className="font-bold text-gray-800">
          {data.title}
          <span className="ml-2 text-sm font-normal text-gray-400">
            ({data?.itemCards?.length} items)
          </span>
        </span>
        <span className={`text-gray-400 transition-transform duration-200 ${showItems ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {showItems && (
        <div className="border-t border-gray-100">
          <ItemList items={data?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategories;
