import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btnName,setbtnName]=useState("Login");
  // console.log("react is rendering whole header component as soon as value is being changed of btnName");
  // useEffect(()=>{
  //   console.log("console.log");
  // },[btnName]);
  // use effect has two arguments one is call back function another is dependency array.useeffect hook is executed every time our page renders.we can  change the behaviour of use effect by using dependency array
  // if the dependency array is empty useEffect is called only on the initial render
  // if we put anything in dependency arry it only called when the dependency changes it will be called every time btnNameReact value is updated
  
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          {/* link is a superpower that is given us by react router dom */}
          <li>
            <Link to="/">Home
            </Link></li>
            {/* when we will click us only body changes not affected the header */}
            {/* react is a single page application only one thing that changes is component .it is not reloading the page*/}
          <li>
            <Link to="/about">About</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName === "Login" ?
              setbtnName("Logout") :
            
            setbtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

 