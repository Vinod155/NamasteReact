import React, { useState } from "react";
import { useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu=(resID)=>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch(MENU_URL+resID);
        const json= await data.json();
        setResInfo(json.data)
    }
    return resInfo

}

export default useRestaurantMenu