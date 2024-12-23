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
const User = ({name}) =>{
  // console.log(name);
  return(
   
  <div className="user-card">
  <h2>Name:{name}</h2>
  <h3>Location:West Bengal</h3>
  <h4>Contact:@Sankha.7</h4>
  </div>
  );
}
export default User;