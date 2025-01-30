import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items,dummy }) => {
  // props driling
  // console.log(dummy);
  const dispatch=useDispatch();
const handleAddButton = (item)=>{
  // disptch an action
  dispatch(addItem(item));
  // {
  //   //it will create an object
  //   payload:"pizza"
  // }

}
  return (
    <div>
      {items.map(function (item) {
        
        return (
          <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
            
            <div className="w-9/12">
           <div className="py-2">
            
            <span>{item.card.info.name}</span>
           <span>  - ₹ {Number(item.card.info.price/100) || 300}

           </span>
           
           </div>
           <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute">
            <button className="p-2 bg-orange-300 shadow-lg mx-16 text-white rounded-xl" onClick={
             ()=> handleAddButton(item)
            }>Add</button> 
            </div>
            
            <img src={CDN_URL + item.card.info.imageId} className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
