import {useState,useEffect} from "react";
const useOnlineStatus=()=>{
// try check  online or not
//boolean
const[onlineStatus,setOnlineStatus]=useState(true);
useEffect(()=>{
window.addEventListener("offline",(e)=>{
  setOnlineStatus(false);
  console.log(onlineStatus);
});
window.addEventListener("online",(e)=>{
  setOnlineStatus(true);
  console.log(onlineStatus);
});
},[]);
return onlineStatus;
}
export default useOnlineStatus;