import RestrurantCard from "./RestrurantCard.js";
import resObj from "../utils/mockdata.js";
import { useEffect, useState } from "react";
function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}
const Body = () => {
  let [listofRestaurants, setListofRestaurants] = useState(resObj);
  useEffect(()=>{
   fetchData();
  },[]);
  
  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("gb");
    console.log(
      json?.data?.cards[2]?.data?.data?.cards
    );
    setListofRestaurants(
      // optional chaining:-
      json?.data?.cards[2]?.data?.data?.cards
    );
  }
  // when body function renders data will be rendered to page.useeffect callback function will be executed when body rendering is done
  // asynchronous
// function f(param1){
//   let x=param1;
//   function g(param2){
//   x=param2;
//   }
//   return [x,g];
// }
// let[var1,var2]=f("sankha");
// var2("subhra");
// let arr=[1,2,3,4,5];
// let [var1,var2]=arr;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurants(filteredlist);
          }}
          // onMouseMove={() => {
          //   console.log("hey you");
          // }}
        >
          Top Rated Restrurant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants?.map((restaurant) => (
          <RestrurantCard
            id={getRandomNumber()}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
