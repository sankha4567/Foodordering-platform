import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { dummydata } from "./dummydata";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);
  // const params=useParams()  ->params is an object which provides resId.for that reason we are destructing on fly
  const { resId } = useParams();
   console.log(resId);
   const resInfo=useRestaurantMenu(resId);
  // useEffect(() => {
  //   setResInfo(dummydata?.data);
  //   // getData();
  // }, []);


  //  export const FETCH_MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="

  // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5957689&lng=88.26363940000002&restaurantId=9866&submitAction=ENTER

  // console.log(dummydata);

  //  console.log(resInfo?.cards[2]?.card?.card?.info);
  function keyfunc() {
    return Math.random().toString(36).substring(2);
  }
  if (resInfo === null) {
    return <Shimmer />;
  }
  try {
    const {
      name,
      cuisines,
      costForTwoMessage,
      totalRatingsString,
      avgRatingString,
      areaName,
      sla,
      feeDetails,
      cloudinaryImageId,
    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
    // console.log(itemCards);

    //  console.log(name);
    //  console.log(cuisines);
    //  // console.log(cloudinaryImageId);
    //  console.log(costForTwoMessage);
    //  console.log(totalRatingsString);
    //  console.log(avgRatingString);
    //  console.log(feeDetails);

    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines?.join(",")} - {costForTwoMessage}
        </p>

        <h2>Menu</h2>
        <ul>
          {itemCards.map(function (item) {
            return (
              <li key={keyfunc()}>
                {item.card.info.name} - Rs.{item.card.info.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Error loading menu</div>;
  }
};

export default RestaurantMenu;
