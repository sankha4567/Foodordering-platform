import User from "./user";
import UserClass from "./UserClass";
import {Component} from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
  constructor(props){
    super(props);
    // console.log("parent bconstructor...");
  }
 componentDidMount(){
    
  }
render(){
  // console.log("parent rendering...");
  // const loggedInUser=useContext(UserContext);
  // console.log(loggedInUser);
  return (
    <div>
    <h1>About</h1>
    <div>
      LoggedIn User
      {/* used it as component not hook inside callback function there is a data pass.react takes care of that */}
      <UserContext.Consumer>
       {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
    </div>
    <h2>This is namaste React</h2>
   
    <UserClass name={"Akshay sainiy(class)"} location = {"Dehradun"}/> 
   {/* <User name={"sankha"}/> */}
  
  {/* <h4 className="font-bold">{loggedInUser}</h4> */}

  </div>
  );
}
}
// const About = () =>{
//   return (
//   <div>
//     <h1>About</h1>
//     <h2>This is namaste React</h2>
   
//     <UserClass name={"Akshay sain(class)"} location = {"Dehradun"}/>



//   </div>

//   );
// };
export default About;