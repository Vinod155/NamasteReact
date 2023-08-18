import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
import { useEffect } from "react"
import Shimmer from "./Shimmers"
import { Link } from "react-router-dom"

const Body=()=>{
    const [restListRestaurant,setrestListRestaurant]=useState([])
    const[filterRestaurant,setFilterRestaurant]=useState([])
    const[searchText,setSearchText]=useState("")
    useEffect(()=>{
        fetchData()},[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") 

        const json=await data.json()
        console.log(json)
        setrestListRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    

    return restListRestaurant?.length===0?(<Shimmer/>):
        (<div className="body">
            <div className="filter">
            <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
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
            <button className="filter-btn" 
            onClick={()=>{
                const filterList=restListRestaurant.filter((res)=>res.info.avgRating>4)
                setFilterRestaurant(filterList)
            }}>
                Top Rated Restaurant</button>
                </div>
             <div className="res-container">
               {filterRestaurant.map((restaurant)=>(
               <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))}
               
             </div>
             
        </div>
    )
}

export default Body