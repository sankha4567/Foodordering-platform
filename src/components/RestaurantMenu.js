import Shimmer from "./Shimmer";
import { dummydata } from "./dummydata";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  
  let dataReceived = useRestaurantMenu(resId);
  const resInfo=JSON.parse(dataReceived);
  // console.log(resId+" passed to hook");
  // console.log(resInfo?.card);
  // console.log(typeof resInfo);
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
    cuisines,
    costForTwoMessage,
  } = resInfo?.card?.card?.info;
  
  const {...Regularitem } =
      resInfo?.card?.Regularitem;
      // console.log(resInfo?.card?.Regularitem.cards[0]);
      // console.log(itemCards?.cards1?.card?.info?.name);
      const itemCards=resInfo?.card?.Regularitem?.cards[0]?.itemCards;
      const categories=resInfo?.card?.Regularitem?.cards?.filter((card)=>card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      // console.log(categories);
  return (
    
    <div className="text-center">
      
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
         <p className="font-bold text-lg">
          {cuisines?.join(",")} - {costForTwoMessage}
        </p>
     {/* categorian accodion*/}
     {categories.map((category)=>{
      // console.log(category);
      return(
       <RestaurantCategories key={keyfunc()}  data={category}/>);
     })}
        
      
      </div>
  );
}

export default RestaurantMenu;
