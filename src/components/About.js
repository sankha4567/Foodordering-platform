import User from "./user";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
  constructor(props){
    super(props);
    // console.log("parent bconstructor...");
  }
 componentDidMount(){
    
  }
render(){
  // console.log("parent rendering...");
  return (
    <div>
    <h1>About</h1>
    <h2>This is namaste React</h2>
   
    {/* <UserClass name={"Akshay sainiy(class)"} location = {"Dehradun"}/> */}
   <User name={"sankha"}/>


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