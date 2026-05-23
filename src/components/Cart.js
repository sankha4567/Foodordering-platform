import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100 || 0;
    return sum + price;
  }, 0);

  const gst = subtotal * 0.05;
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + gst + deliveryFee;

  if (cartItems?.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 flex flex-col items-center gap-4 text-center">
        <span className="text-7xl">🛒</span>
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500">Add items from a restaurant to get started</p>
        <Link
          to="/"
          className="mt-2 px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
        >
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
        <button
          className="px-4 py-1.5 border-2 border-red-400 text-red-500 text-sm font-semibold rounded-xl hover:bg-red-50 transition-colors"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        {/* Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <p className="font-semibold text-gray-700">{cartItems.length} item{cartItems.length > 1 ? "s" : ""}</p>
          </div>
          <ItemList items={cartItems} />
        </div>

        {/* Bill Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 h-fit">
          <h2 className="font-bold text-gray-800 text-lg mb-4 pb-3 border-b border-gray-100">
            Bill Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Item Total</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>₹ {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>GST & Charges (5%)</span>
              <span>₹ {gst.toFixed(2)}</span>
            </div>
            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
              <span>To Pay</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors active:scale-95">
            Proceed to Payment
          </button>

          <p className="text-xs text-gray-400 text-center mt-3">
            Free cancellation before the restaurant accepts your order
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
