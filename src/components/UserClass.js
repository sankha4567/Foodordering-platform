import React from "react";
class UserClass extends React.Component{
  constructor(props){
     super(props);
    console.log("hello2");
    console.log(props);
  }
  render(){
     console.log("hello");
    return(
      
      <div className="user-card">
      <h2>Name:{this.props.name}</h2>
      <h3>Location:West Bengal</h3>
      <h4>Contact:@Sankha.7</h4>
      </div>
    );
  }
}
export default UserClass;