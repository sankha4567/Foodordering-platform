import RestrurantCard from "./RestrurantCard.js";
import resObj from "../utils/mockdata.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { bodydata } from "./Bodymock.js";
function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}
const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");
  // console.log("body rendered");
  // whenever state variable updates react triggers a reconciliation cycle(re renders the component)
  //never create usestate inside loops,ifelse.state variale must be created inside the functional component  at the top most level
  // if fails19*40 remove 41 42
  useEffect(()=>{
   fetchData();
  },[]);
  
  const fetchData = async ()=>{
    // const data = await fetch(
    //   // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
    // );
    // const json = await data.json();
    // console.log("gybbbbk");
    //  console.log(
    //    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    // );
    const json=bodydata;
    setListofRestaurants(
      // optional chaining:-
      // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant( 
      // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants


      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
// const listofRestaurant=useRestaurantList();
// setListofRestaurants(listofRestaurant);
// setFilteredRestaurant(listofRestaurant);
const onlineStatus=useOnlineStatus();

if(onlineStatus === false){
  return <h1>Looks like you are Offline!!!!!!please check your Internet</h1>
}


else{




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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input className="bg-green-50  border border-solid border-black" type="text" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          >

          </input>
          <button className = "px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
            // input text
            const filteredlist=listofRestaurants?.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            // now if we add some pattern to search it will try to search based on the filtered ones to fix thisbugggg
            setFilteredRestaurant(filteredlist);
            console.log(searchText);
          }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="filter-btn px-4 py-2 m-4 bg-gray-100 rounded-lg"
          onClick={() => {
            // i update it was listofRestaurants to filteredRestaurant if i do it top rated to search wroking and vice versa.but when we do search then click top rated fine working.but when we empty the search box and search not the updation happens.
            const filteredlist = listofRestaurants?.filter(
              (res) => res.info.avgRating > 4.3
            );
             console.log(filteredlist);
            // setListofRestaurants(filteredlist);
            //extra line
             setFilteredRestaurant(filteredlist);
          }}
          // onMouseMove={() => {
          //   console.log("hey you");
          // }}
        >
          Top Rated Restrurant
        </button>
        </div>
       
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link 
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}><RestrurantCard
             
            
            resData={restaurant} 
          /> </Link>
        ))}
      </div>
    </div>
  );
}
};
export default Body;
