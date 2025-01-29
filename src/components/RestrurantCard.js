import { CDN_URL } from "../utils/constants";

// const RestrurantCard = (props) => {
//   const {resData} =props;
//   const {name,
//     cuisines,
//     avgRating,
//     cloudinaryImageId} = resData?.card?.card?.info || {};
//   return (
//     <div
//       className="res-card"
//       style={{
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo"></img>
//       <h3>{name}</h3>
//       <h4>{cuisines?.join(" , ")}</h4>
//       <h4>{avgRating}⭐🍽️</h4>
//       <h4>{`${resData?.card?.card?.info?.sla?.deliveryTime} minutes`}</h4>
//     </div>
//   );
// };
const RestrurantCard = (props) => {
  // console.log("dc");
  const { resData } = props;
  // console.log(resData); 
  // console.log(resData?.card?.card?.info); 


  const {id,cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString } =
  resData?.info;
    // console.log(resData?.card?.card?.info);
    // console.log(id);
  return (
   

    
    <div className="m-4 p-4 w-[250px] border border-solid border-black h-[360px] bg-orange-100 rounded-lg hover:bg-gray-400" data-testid="resCard">
      <img
        className="h-36 w-full rounded-lg"
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2.5 px-2.5 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span>★ {avgRating} </span> &nbsp; Ratings
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
    
  );
};
// higher order component
// input rescard output promoted res card
export const withPromotedLabel = (RestrurantCard) =>{
  return (props)=>{
    return (
      <div>
   <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
   <RestrurantCard {...props}/>
   </div>
    );
  }
}
export default RestrurantCard;

