import RestrurantCard, { withPromotedLabel } from "./RestrurantCard.js";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { bodydata } from "./Bodymock.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRatedActive, setTopRatedActive] = useState(false);
  const RestaurantCardPromoted = withPromotedLabel(RestrurantCard);
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const json = bodydata;
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  }, []);

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <span className="text-6xl">📡</span>
        <h1 className="text-2xl font-bold text-gray-700">You are Offline</h1>
        <p className="text-gray-500">Please check your internet connection</p>
      </div>
    );
  }

  if (listofRestaurants?.length === 0) return <Shimmer />;

  const handleSearch = () => {
    const filtered = listofRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
    setTopRatedActive(false);
  };

  const handleTopRated = () => {
    if (topRatedActive) {
      setFilteredRestaurant(listofRestaurants);
      setTopRatedActive(false);
    } else {
      setFilteredRestaurant(listofRestaurants.filter((res) => res.info.avgRating > 4.3));
      setTopRatedActive(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center flex-1 min-w-[200px] border border-gray-300 rounded-xl overflow-hidden focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        <button
          className="px-5 py-2 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 active:scale-95 transition-all"
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          className={`px-5 py-2 text-sm font-semibold rounded-xl border-2 transition-all active:scale-95 ${
            topRatedActive
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white text-orange-500 border-orange-500 hover:bg-orange-50"
          }`}
          onClick={handleTopRated}
        >
          ★ Top Rated
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <label className="text-sm text-gray-500 hidden sm:block">Hi,</label>
          <input
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm w-36 focus:outline-none focus:border-orange-400"
            onChange={(e) => setUserInfo(e.target.value)}
            value={loggedInUser}
            placeholder="Your name"
          />
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">{filteredRestaurant?.length} restaurants found</p>

      {/* Restaurant grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestrurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>

      {filteredRestaurant?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <span className="text-5xl">🍽️</span>
          <p className="text-gray-500 text-lg">No restaurants match your search</p>
          <button className="text-orange-500 underline text-sm" onClick={() => { setSearchText(""); setFilteredRestaurant(listofRestaurants); setTopRatedActive(false); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
