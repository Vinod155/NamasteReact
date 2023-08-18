import { CON_URL } from "../../utills/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo}=resData?.info
    const{deliveryTime}=resData?.info.sla
     return(
         <div className="res-card">
       <img className="res-logo" alt="res-logo"src={CON_URL+resData.info.cloudinaryImageId}></img>
       <h2>{name}</h2>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{deliveryTime} minutes</h4>
       <h4>{costForTwo}</h4>
         </div>
     )
 }

 export default RestaurantCard