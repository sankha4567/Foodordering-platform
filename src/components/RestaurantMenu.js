
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

const [resInfo,setResInfo] = useState({});
   useEffect(
    ()=>{
    fetchMenu();
    },[]
   );
  //  export const FETCH_MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="

  // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5957689&lng=88.26363940000002&restaurantId=9866&submitAction=ENTER
   const fetchMenu=async ()=>{
    const data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5957689&lng=88.26363940000002&restaurantId=9866&submitAction=ENTER");
    const json=await data.json();
    // console.log("hi");
    console.log(json);
    setResInfo(json?.data);
   };
 try {
   const {name,
     cuisines,
     costForTwoMessage,
     totalRatingsString,
     avgRatingString,
     areaName,
     sla,
     feeDetails} =resInfo?.cards[2]?.card?.card?.info;
     console.log(name);
     console.log(cuisines);
     // console.log(cloudinaryImageId);
     console.log(costForTwoMessage);
     console.log(totalRatingsString);
     console.log(avgRatingString);
     console.log(feeDetails);
    console.log(resInfo?.cards[2]);
 } catch (error) {
  console.log(error);
 }
  return resInfo === null? (
  <Shimmer/> 
  ) : (
    <div className="menu">
      <h1>{name}</h1> 
      <h3>{cuisines?.join(",")}</h3>
      <h3>{costForTwoMessage}</h3> 

      <ul>
        <li>Biriyani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
