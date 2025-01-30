import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
  // we are subscribing to store.cart.items
  // if we are not subscribing to right part it will be big performnace loss
  // if we are subscribing to whole part that will be big performance loss
  // const store=useSelector((store)=>store);
  // const cartItems=store.cart.items;
  const cartItems=useSelector((store)=>store.cart.items)
   const dispatch=useDispatch();
  const handleClearCart=()=>{
   dispatch(clearCart());
  }
  return (
  <div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
    <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
    {cartItems?.length === 0 && <h1>Cart is Empty.Add Items to the Cart
      👀👀🥺🥺
      </h1>}
      <ItemList items={cartItems}></ItemList>
    </div>
    </div>
  );
}
export default Cart;