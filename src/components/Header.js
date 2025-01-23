import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName,setbtnName]=useState("Login");
const onlineStatus=useOnlineStatus();
  // console.log("react is rendering whole header component as soon as value is being changed of btnName");
  // useEffect(()=>{
  //   console.log("console.log");
  // },[btnName]);
  // use effect has two arguments one is call back function another is dependency array.useeffect hook is executed every time our page renders.we can  change the behaviour of use effect by using dependency array
  // if the dependency array is empty useEffect is called only on the initial render
  // if we put anything in dependency arry it only called when the dependency changes it will be called every time btnNameReact value is updated
  
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
      <div className="logo-container">
        <img 
          className="pl-2 h-24 sm:w-full"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-items flex items-center ">
        <ul className="flex p-4 m-4">
          {/* link is a superpower that is given us by react router dom */}
          <li className="px-4">Online Status:
          {
            onlineStatus  ? "✅" : 
            "❌" }
            
          </li>
          <li className="px-4">
            <Link to="/">Home
            </Link></li>
            {/* when we will click us only body changes not affected the header */}
            {/* react is a single page application only one thing that changes is component .it is not reloading the page*/}
          <li className="px-4">
            <Link to="/about">About</Link></li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link></li>
            <li className="px-4">
            <Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="px-4" onClick={()=>{
            btnName === "Login" ?
              setbtnName("Logout") :
            
            setbtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

 