import { useEffect, useState } from "react"
import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>
{

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId)
    
    
    if(resInfo===null)
    {
        return(<Shimmer/>)
    }
    const { name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(name)
    const categories=resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    
        
        
  //  console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards)
    return(
        <div className="text-center ">
            <h1 className="font-bold my-8 text-4xl">{name}</h1>
            <p className="font-bold">
                {cuisines.join(", ")}- {costForTwoMessage}
            </p>
            {categories.map((category) =>(
                
                <RestaurantCategory key={category.card.card.title} data={category?.card?.card}/>
            ))
}            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                <li  key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100} Rs</li>)}
            </ul> */}
        </div>
    )

                }
export default RestaurantMenu