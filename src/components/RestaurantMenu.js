import Shimmer from "./Shimmer";
import { dummydata } from "./dummydata";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  
  const resInfo = JSON.parse(useRestaurantMenu(resId));
  console.log(resId+" passed to hook");
  console.log(resInfo?.card);
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
