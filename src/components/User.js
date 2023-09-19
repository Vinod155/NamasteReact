import { useState } from "react"

const User=({name})=>{
    const[count]=useState(0)
    return(
        <div>
            <h1>Count:{count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Vaishali</h3>
        <h4>contact: @vinnie_pooh</h4>
        </div>
    )
}
export default User