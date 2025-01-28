
import Shimmer from "./Shimmer";
import { dummydata } from "./dummydata";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

 
  const { resId } = useParams();
   console.log(resId);
  
   let dataReceived = useRestaurantMenu(resId);
  const resInfo=JSON.parse(dataReceived);
  // useEffect(() => {
  //   setResInfo(dummydata?.data);
  //   // getData();
  // }, []);
  console.log(resId+" passed to hook");
  console.log(resInfo?.card);
  console.log(typeof resInfo);

  console.log('printed inside restaurant menu');
 
  if (!resInfo ) {
    return <Shimmer />;
  }
 
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
    } = resInfo?.card?.card?.info;
      console.log("name is:" , name);
     console.log(cuisines);
   //bugggg
    const { itemCards } =
      resInfo?.card?.itemCards;
    console.log(itemCards);

   
   

    return (
      <div className="menu">
        <h1>{name}</h1>
         <p>
          {cuisines?.join(",")} - {costForTwoMessage}
        </p>

        <h2>Menu</h2>
        <ul>
              <li>
                {itemCards?.card1?.card?.info?.name} </li>
                <li> {itemCards?.card2?.card?.info?.name} </li>
                <li>{itemCards?.card3?.card?.info?.name} </li>
                <li>{itemCards?.card4?.card?.info?.name} </li>
                <li>{itemCards?.card5?.card?.info?.name} </li>
                <li>{itemCards?.card6?.card?.info?.name} </li>
                <li>{itemCards?.card7?.card?.info?.name} </li>
                <li>{itemCards?.card8?.card?.info?.name} </li>
                <li>{itemCards?.card9?.card?.info?.name} </li>
                <li>{itemCards?.card10?.card?.info?.name} </li>
                <li>{itemCards?.card11?.card?.info?.name} </li>
                <li>{itemCards?.card12?.card?.info?.name} </li>
              
          
        
        </ul> 
      </div>
    );
 
}

export default RestaurantMenu;
