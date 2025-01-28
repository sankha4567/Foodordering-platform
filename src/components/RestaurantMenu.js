import Shimmer from "./Shimmer";
import { dummydata } from "./dummydata";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  
  let dataReceived = useRestaurantMenu(resId);
  const resInfo=JSON.parse(dataReceived);
  console.log(resId+" passed to hook");
  console.log(resInfo?.card);
  console.log(typeof resInfo);
  // Object.defineProperty(resInfo, "itemCards", {
  //   enumerable: true,
  //   configurable: true,
  //   get: function () {
  //     return this.itemCards;
  //   },
  // });

  // console.log(resInfo?.itemCards);
  console.log('printed inside restaurant menu');
  function keyfunc() {
    return Math.random().toString(36).substring(2);
  }
  if (!resInfo) {
    return <Shimmer />;
  }
  
  const {
    name,
  } = resInfo?.card?.card?.info;
  console.log('Name is',name);
  return (
    <div className="menu">
      <h1>{name}</h1>
      
    </div>
  );
};

export default RestaurantMenu;
