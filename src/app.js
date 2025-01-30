import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import Body from "./components/Body.js";
 import About1 from "./components/About1.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery.js";
import Shimmer from "./components/Shimmer.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
// configuring is redux toolkit job.and providing is react-redux job
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
//  authentication logic
 const[userInfo,setUserInfo] = useState();
 useEffect(()=>{
  const data={
  name:"Sankha Subhra Moitra"
  };
  setUserInfo(data.name);
 },[]);
  return (
    <Provider store={appStore}>
    
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    {/* // to modify the value */}
      <div className="app">
      
        <Header />
        
        <Outlet />
        {/* outlet will be replaced as base of path */}
      </div>
      </UserContext.Provider>
      </Provider>
    
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
    },
    {
    path:"/cart",
    element:<Cart/>
    }
  ],
  errorElement:<Error />
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// eariler we are rendering applayout directly
// router provider will actually provide router configuration to our app
// react router dom create a router page for us for error