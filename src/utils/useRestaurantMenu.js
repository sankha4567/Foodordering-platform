// custom hooks
import { useEffect, useState } from "react";
import { dummydata } from "../components/dummydata";
const useRestaurantMenu = (resId) =>{
  const [resInfo,setResInfo] = useState(null);
  //fetch data
  useEffect(()=>{
    setResInfo(dummydata?.data);
      // getData();
    }, []);


  return resInfo;
}
export default useRestaurantMenu;