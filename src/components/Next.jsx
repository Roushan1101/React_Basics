import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Next.css'
function Next(){
    const [curr,state]=useState("Hello");
   
    function Inc(event){
    state("Hello"+" "+event.target.value);
    }
    return(
        <div className="div1">
        <h1>{curr}</h1>
        <input type="text" placeholder="Name.." onChange={Inc}/>
        </div>
    )
}
export default Next;