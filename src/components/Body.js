import RestrurantCard from "./RestrurantCard.js";
import resObj from "../utils/mockdata.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}
const Body = () => {
  let [listofRestaurants, setListofRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");
  // console.log("body rendered");
  // whenever state variable updates react triggers a reconciliation cycle(re renders the component)
  //never create usestate inside loops,ifelse.state variale must be created inside the functional component  at the top most level
  useEffect(()=>{
   fetchData();
  },[]);
  
  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("gb");
    //  console.log(
    //    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    // );
    setListofRestaurants(
      // optional chaining:-
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
// conditional rendering

  return listofRestaurants?.length === 0 ? (
  <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input className="search-box" type="text" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          >

          </input>
          <button onClick={()=>{
            // input text
            const filteredlist=listofRestaurants?.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            // now if we add some pattern to search it will try to search based on the filtered ones to fix thisbugggg
            setFilteredRestaurant(filteredlist);
            console.log(searchText);
          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // i update it was listofRestaurants to filteredRestaurant if i do it top rated to search wroking and vice versa.but when we do search then click top rated fine working.but when we empty the search box and search not the updation happens.
            const filteredlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
             console.log(filteredlist);
            setListofRestaurants(filteredlist);
            //extra line
            // setFilteredRestaurant(filteredlist);
          }}
          // onMouseMove={() => {
          //   console.log("hey you");
          // }}
        >
          Top Rated Restrurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestrurantCard
            // id={getRandomNumber()}
            
            resData={restaurant} 
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
