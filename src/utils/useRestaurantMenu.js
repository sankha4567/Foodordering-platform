// custom hooks
import { useEffect, useState } from "react";
import { dummydata } from "../components/dummydata";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data
  useEffect(() => {
    // setResInfo();
    fetchData();
  }, [resId]);

async function fetchData()  {
    try {
      const res = await fetch(
        "http://localhost:7000/api/v1/restaurants/" + resId
      );

      const json = await res.json();
      console.log("isside res menu 1");
      console.log(json);

      setResInfo(json);
    } catch (error) {
      console.log(error + " in resmenu");
    }
  };

  console.log("isside res menu 2");
  console.log(resInfo);
  return resInfo;
};
export default useRestaurantMenu;
