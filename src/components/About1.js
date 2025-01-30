import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const About1=()=>{
  const loggedInUser=useContext(UserContext);
  return (
    <div>
  <h4 className="font-bold">{loggedInUser || "sankha subhra moitra"}</h4>
    <h1>About</h1>
    <h2>This is namaste React</h2>
   
    <UserClass name={"Akshay sainiy(class)"} location = {"Dehradun"}/> 
   {/* <User name={"sankha"}/> */}
  
  

  </div>
  );
}
export default About1;