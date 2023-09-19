import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=(props)=>{
const {data}=props
const[showItems,setShowItems]=useState(false)
const handelClick=()=>{

   setShowItems(!showItems);
   
}
    return(
       <div>
         <div className="w-6/12  mx-auto my-4 p-1.5 bg-gray-100 shadow-lg ">
          <div className="flex justify-between cursor-pointer" onClick={handelClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
          </div>
             {showItems && <ItemList  data={data.itemCards}/>}
        </div>
       
       </div>
    )
}
export default RestaurantCategory;