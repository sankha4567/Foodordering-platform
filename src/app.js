import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import Shimmer from "./components/Shimmer.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const About = lazy(() => import("./components/About.js"));
const AppLayout = () => {
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
      <div className="app">
      
        <Header />
        
        <Outlet />
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