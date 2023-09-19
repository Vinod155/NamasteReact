import RestaurantCard,{withPromotedLabel} from "./RestaurantCard"
import { useState } from "react"
import { useEffect } from "react"
import Shimmer from "./Shimmers"
import { Link } from "react-router-dom"
import useOnlineStatus from '../../utills/useOnlineStatus'

const Body=()=>{
    const [restListRestaurant,setrestListRestaurant]=useState([])
    const[filterRestaurant,setFilterRestaurant]=useState([])
    const[searchText,setSearchText]=useState("")
    const RestaurantPromoted=withPromotedLabel(RestaurantCard)
    useEffect(()=>{
        fetchData()},[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") 

        const json=await data.json()
        console.log(json)
        setrestListRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(filterRestaurant)
    }
    const onlineStatus=useOnlineStatus()
    console.log("status:"+onlineStatus)
    if(onlineStatus===false)
    {
        return (
        <h1>Looks like you are offline! please enable your internet connection</h1>)
    }
    
    return restListRestaurant?.length===0?(<Shimmer/>):
        (<div className="body">
            <div className="flex">
            <div className="search m-2 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-1 bg-green-200 m-4 rounded-md" onClick={()=>{
                        const filterListSearch=restListRestaurant.filter((res)=>{
                                var restName=res.info.name.toLowerCase()
                                console.log(restName)
                                if(restName.includes(searchText.toLocaleLowerCase()))
                                {
                                    return restName;
                                }
                                //return ""
                       
                            })
                            setFilterRestaurant(filterListSearch)
                        
                    }}>Search</button>
                </div>
                <div className="px-4 py-1 m-2 flex items-center">
                <button className="px-4 py-1 bg-gray-200 rounded-md" 
            onClick={()=>{
                const filterList=restListRestaurant.filter((res)=>res.info.avgRating>4)
                setFilterRestaurant(filterList)
            }}>
                Top Rated Restaurant</button>
                </div>
            
                </div>
             <div className="flex flex-wrap">
               {filterRestaurant.map((restaurant)=>(
               <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>{restaurant.info.isOpen?<RestaurantPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant}/>}</Link>))}
               
             </div>
             
        </div>
    )
}

export default Body