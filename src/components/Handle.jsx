import React, { useState } from 'react'
import './Handle.css'
function Handle(){
    const[curr,state]=useState("Hola !")
    function handleChange(event){
        state(event.target.value*event.target.value)
    }
    return(
        <div className="hel">
            <h1>Square: {curr}</h1>
        <input type="text" placeholder="Enter integer value.."  onChange={handleChange}/>
        </div>
    )
}
export default Handle;