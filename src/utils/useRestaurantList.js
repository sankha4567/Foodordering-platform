import { useState,useEffect } from "react";
const useRestaurantList=()=>{
  let [listofRestaurants, setListofRestaurants] = useState([]);
useEffect(()=>{
   fetchData();
  },[]);
  
  const fetchData = async ()=>{
    const base = process.env.PARCEL_PUBLIC_API_BASE || "";
    const data = await fetch(base + "/api/v1/users");
    const json = await data.json();
    setListofRestaurants(json?.restuarants ?? []);
}
return listofRestaurants;
}
export default useRestaurantList;