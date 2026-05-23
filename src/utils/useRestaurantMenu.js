// custom hooks
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    if (!resId) {
      return;
    }
    fetchData();
  }, [resId]);

  async function fetchData() {
    try {
      const base = process.env.PARCEL_PUBLIC_API_BASE || "";
      const res = await fetch(base + "/api/v1/restaurants/" + resId);

      const json1 = await res.json();
      setResInfo(json1);
    } catch (error) {
      // fetch failed silently
    }
  }

  return resInfo;
};
export default useRestaurantMenu;
