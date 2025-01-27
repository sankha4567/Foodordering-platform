import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";

// import Grocery from "./components/Grocery.js";
import Shimmer from "./components/Shimmer.js";

// // const styleCard = ;
//  function AppLayout() {
//   return <div className="app">{Header()}{Body()}</div>
  
// };
// chunking
// code spilitting
// dynamic bundling
// lazy loading
// on demand  loading

const Grocery = lazy(() => import("./components/Grocery.js"));
const About=lazy(()=>import("./components/About.js"));
const AppLayout = () => {
 console.log("hello from applayout");
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
      element:<Suspense fallback={<h1>Loading.......</h1>}><About/></Suspense>,
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
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