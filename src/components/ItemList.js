import { CON_URL } from "../../utills/constants"
const ItemList=(items)=>{
    console.log(items)
    return(
        <div>
            <div>
               <ul>
               {items.data.map(item =><div className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between" key={item.card.info.id}>
               <div className="w-9/12">
                <div className="py-1">
                    <span>{item.card.info.name} </span>
                    <span>-₹ {item.card.info.price===undefined?item.card.info.defaultPrice/100:item.card.info.price/100}</span>
                </div>
                <p className="text-xs">
                    {item.card.info.description}
                 </p>
                 </div>
                 <div className="w-2/12" >
                    <div className="absolute">
                    <button className="shadow-lg  bg-gray-300 m-auto">Add +</button>
                    </div>
                    <img src={CON_URL +item.card.info.imageId}/>
                   
                 </div>         
               </div>)}
               </ul>
            </div>
        </div>
    )
}
export default ItemList