import ItemList from "./ItemList";

const RestaurantCategories=({...props})=>{
  console.log(props);
  const obj=props?.data;
  console.log("afetett");
  console.log(obj?.itemCards?.length);
  return(
    <div>
      {/* Header */}

    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
    <div className="flex justify-between">
      <span className="font-bold text-lg">{obj.title}({obj?.itemCards?.length})</span>
    <span>⬇️</span>
    </div>
    <ItemList items={obj?.itemCards}></ItemList>
    </div>
    
    {/* Accordian body */}
    
    </div>
  );
}
export default RestaurantCategories;