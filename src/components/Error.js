import { useRouteError } from "react-router-dom";
// it is a error related hook that is provided by the react router dom.it tells more info aout the error(better message)
const Error=()=>{
  const err=useRouteError();
  // console.log(err);
  return (
 <div>
  <h1>
    Oops!!👀🥺
  </h1>
  <h2>Something Went Wrong</h2>
  <h3>{err.status}: {err.statusText}</h3>
 </div>
  );
};
export default Error;