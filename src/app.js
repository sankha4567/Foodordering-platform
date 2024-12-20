import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";


// // const styleCard = ;
//  function AppLayout() {
//   return <div className="app">{Header()}{Body()}</div>
  
// };



const AppLayout = () => {
  // console.log("hello world");
  return (
    <React.StrictMode>
      <div className="app">
        <Header />
        <Outlet />
        {/* outlet will be replaced as base of path */}
      </div>
    </React.StrictMode>
  );
};
const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<AppLayout />,
  children:[
    {
       path:"/",
       element:<Body/>
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",

      element:<RestaurantMenu/>
    }
  ],
  errorElement:<Error />
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// eariler we are rendering applayout directly
// router provider will actually provide router configuration to our app
// react router dom create a router page for us for error