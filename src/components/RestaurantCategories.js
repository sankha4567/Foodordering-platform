 import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories=({...props})=>{
  const[fiture,setFiture]=useState(true);
  // console.log(props);
  const obj=props?.data;
  const showItems=props?.showItems;
  const setShowIndex=props.setShowIndex;
  const dummy=props.dummy;
  // console.log("afetett");
  // console.log(obj?.itemCards?.length);
  function handleclick(){
   setShowIndex();
   setFiture(!fiture);
    // console.log("clicked");
  }
  return(
    <div>
      {/* Header */}

    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
    <div className="flex justify-between cursor-pointer" onClick={handleclick}>
      <span className="font-bold text-lg">{obj.title}({obj?.itemCards?.length})</span>
    <span>⬇️</span>
    </div>
   {showItems && fiture && <ItemList items={obj?.itemCards} dummy={dummy}></ItemList>}
    </div>
    
    {/* Accordian body */}
    
    </div>
  );
}
export default RestaurantCategories;