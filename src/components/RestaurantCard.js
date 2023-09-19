import { CON_URL } from "../../utills/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo}=resData?.info
    const{deliveryTime}=resData?.info.sla
     return(
         <div className="m-4 p-4 w-[250px] bg-slate-300 rounded-lg hover:bg-gray-500">
       <img className="rounded-lg h-[210px]" alt="res-logo"src={CON_URL+resData.info.cloudinaryImageId}></img>
       <h2 className="font-bold py-2 text-lg">{name}</h2>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{deliveryTime} minutes</h4>
       <h4>{costForTwo}</h4>
         </div>
     )
 }

 export const withPromotedLabel=(RestaurantCard)=>{
        return (props)=>{
            return(
                <div>
                    <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
                    <RestaurantCard {...props}/>
                </div>
            )
        }
 }

 export default RestaurantCard