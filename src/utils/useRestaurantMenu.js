// custom hooks
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resId+" received");
  useEffect(() => {
    if (!resId) {
      console.warn("resId is not provided or undefined.");
      return;
    }
    console.log(resId + " inside useRestaurantMenu");
    fetchData();
  }, [resId]);

  async function fetchData() {
    try {
      const res = await fetch(
        "http://localhost:7000/api/v1/restaurants/" + resId
      );

      const json1 = await res.json();
      console.log("inside res menu 1");
      console.log(json1);
      setResInfo(json1);
    } catch (error) {
      console.log(error + " in resmenu");
    }
  }

  console.log("inside res menu 2");
  console.log(resInfo);
  return resInfo;
};
export default useRestaurantMenu;
