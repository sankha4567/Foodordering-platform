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


  const {id,cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
  resData?.info;
    // console.log(resData?.card?.card?.info);
    // console.log(id);
  return (
    <div className="res-card" data-testid="resCard">
      <img
        style={{ width: "100%", height: "140px" }}
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span>★ {avgRating} </span> &nbsp; Ratings
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestrurantCard;

