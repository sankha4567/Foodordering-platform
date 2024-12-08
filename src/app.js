import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import Body from "./components/Body.js";



// // const styleCard = ;
//  function AppLayout() {
//   return <div className="app">{Header()}{Body()}</div>
  
// };



const AppLayout = () => {
  console.log("hello world");
  return (
    <React.StrictMode>
      <div className="app">
        {Header()}
        {Body()}
      </div>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

