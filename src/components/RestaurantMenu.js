import { useEffect, useState } from "react"
import Shimmer from "./Shimmers";
import { MENU_URL } from "../../utills/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>
{
    const[resInfo,setResInfo]=useState(null)
    useEffect(()=>
    {
  fetchMenu();
    },[])
const {resId}=useParams()
    const fetchMenu=async ()=>{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json();
    setResInfo(json?.data)
    }
    if(resInfo===null)
    {
        return(<Shimmer/>)
    }
    const { name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)
  //  console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards)
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                <li  key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100} Rs</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu