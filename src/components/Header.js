import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors hover:text-orange-500 ${
        location.pathname === to ? "text-orange-500 font-semibold" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img className="h-12 w-12 object-contain" src={LOGO_URL} alt="logo" />
          <span className="hidden sm:block text-xs font-semibold text-gray-500 leading-tight">
            FOOD<br />ORDER
          </span>
        </Link>

        <nav className="flex items-center gap-1 flex-wrap">
          <span className={`flex items-center gap-1 px-3 text-sm ${onlineStatus ? "text-green-600" : "text-red-500"}`}>
            <span className={`w-2 h-2 rounded-full ${onlineStatus ? "bg-green-500" : "bg-red-500"}`}></span>
            {onlineStatus ? "Online" : "Offline"}
          </span>

          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/contact", "Contact")}
          {navLink("/grocery", "Grocery")}

          <Link to="/cart" className="relative flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
            {cartItems?.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>

          <button
            className="px-4 py-1.5 rounded-full border-2 border-orange-500 text-orange-500 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors"
            onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>

          {loggedInUser && (
            <span className="hidden md:flex items-center gap-1 px-3 py-1 bg-orange-50 rounded-full text-sm font-medium text-orange-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              {loggedInUser}
            </span>
          )}
        </nav>
      </div>
    </header>
  );
};
