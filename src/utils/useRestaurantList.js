import { useState,useEffect } from "react";
const useRestaurantList=()=>{
  let [listofRestaurants, setListofRestaurants] = useState([]);
useEffect(()=>{
   fetchData();
  },[]);
  
  const fetchData = async ()=>{
    const data = await fetch("/api/v1/users");
    const json = await data.json();
    setListofRestaurants(json?.restuarants ?? []);
}
return listofRestaurants;
}
export default useRestaurantList;