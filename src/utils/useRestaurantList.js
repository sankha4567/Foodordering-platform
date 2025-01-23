import { useState,useEffect } from "react";
const useRestaurantList=()=>{
  let [listofRestaurants, setListofRestaurants] = useState([]);
useEffect(()=>{
   fetchData();
  },[]);
  
  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurants(
      // optional chaining:-
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
}
return listofRestaurants;
}
export default useRestaurantList;