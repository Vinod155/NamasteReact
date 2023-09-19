import { LOGO_URL } from "../../utills/constants"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from '../../utills/useOnlineStatus'

const Header=()=>{
  const[btnName,setBtnName]=useState("LogIn")
  const onlineStatus=useOnlineStatus();
  useEffect(()=>{console.log("Use effect called")},[])
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-slate-200">
            <div className="logo">
                <img className="w-56" src={LOGO_URL}  alt=""/>
            </div>
            <div className="flex items-center">
              <ul className="flex p-4 m-4">
                <li className="px-3">Online Status:{onlineStatus?"✅":"⛔"}</li>
                <li className="px-3"><Link to="/">Home</Link></li>
                <li className="px-3"><Link to="/about">About Us</Link></li>
                <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                <li className="px-3">Cart</li>
                <li className="px-3"><button className="login" onClick={()=>{btnName==="LogIn"?setBtnName("Logout"):setBtnName("LogIn")}}>{btnName}</button></li>
              </ul>
            </div>
        </div>
    )
}

export default Header