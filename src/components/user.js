// const User = (props) =>{
//   return(
   
//   <div className="user-card">
//   <h2>Name:{props.name}</h2>
//   <h3>Location:West Bengal</h3>
//   <h4>Contact:@Sankha.7</h4>
//   </div>
//   );
// }
// export default User;
// or we can destructure on fly
import {useState,useEffect} from "react";

const User = ({name}) =>{
  // this is going as a parameter
  const [count] = useState(0);
  const [count2] = useState(1);
  // console.log(count);
  useEffect(
  ()=>{
    const timer=setInterval(()=>{
      console.log("react op")
    },1000);
    console.log("use effect");
    // function is called when we are unmounting these elemnt
    return ()=>{
      clearInterval(timer);
      console.log("use effect return ");
    }
  },[]
  );
  console.log("render");
  return(
   
  <div className="user-card">
  <h1>count={count}</h1>
  <h1>count2={count2}</h1>
  <h2>Name:{name}</h2>
  
  <h3>Location:West Bengal</h3>
  <h4>Contact:@Sankha.7</h4>
  </div>
  );
}
export default User;