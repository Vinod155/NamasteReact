import { LOGO_URL } from "../../utills/constants"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
const Header=()=>{
  const[btnName,setBtnName]=useState("LogIn")
  useEffect(()=>{console.log("Use effect called")},[])
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL}  alt=""/>
            </div>
            <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li><button className="login" onClick={()=>{btnName==="LogIn"?setBtnName("Logout"):setBtnName("LogIn")}}>{btnName}</button></li>
              </ul>
            </div>
        </div>
    )
}

export default Header