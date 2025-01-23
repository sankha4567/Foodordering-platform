import React from "react";
class UserClass extends React.Component{
 
  constructor(props){
     super(props);
    // console.log("hello2");
    // console.log(props);
    // i will recive the props in the userclass
    //state basically a big whole object
    this.state = {
      // count:0,
      // count2:0,
      userInfo:{
        name:"Dummy",
        location:"Dummy Location",
        avatar_url:"dummy url",

      }
    }
    // console.log(this.props.name + "child constructor");
  }
   componentDidMount(){
    // const data=await fetch("https://api.github.com/users/sankha4567");
    // const json=await data.json();
    // this.setState(
    //   {
    //     userInfo: json,
    //   }
    // );
    // console.log(data);
//     const data = await fetch("https://api.github.com/rate_limit");
// const json = await data.json();
// console.log(json);
  // this.timer=setInterval(()=>{
  //   console.log("react op")
  // },1000);
  console.log("componenet did mouunt");

  }
  componentDidUpdate(){
    console.log("component updated");
  }
  componentWillUnmount(){
    // clearInterval(this.timer);
    console.log("component unmounted");
  }
  // class based component is a class which extends React.Component which have a render method which returns a normal piece of jsx,this JSX Will be converted in html and will be rendered in our webpage
  //React.Component is present in the js React package
  render(){
    //  console.log("hellodc");
    const {name,location,avatar_url} = this.state.userInfo;
   
    // console.log(name + "child render");
    return(
      
      <div className="user-card">

      {/* <button onClick={
        ()=>{
          this.setState({
            count:this.state.count + 1,
            count2:this.state.count2 + 1,
          });
        }}>Count Increase</button> */}
     <img src={avatar_url} style={{height:200, width:200}}/>
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h4>Contact:@Sankha.7</h4>
      </div>
    );
  }
}
export default UserClass;