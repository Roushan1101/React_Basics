import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
function Home(){
const[time,state]=useState();

function Loop(){
    var val=document.getElementById("val").value;
    for(let i=0;i<=val+1;i++){
    if(i<=val)
    setTimeout(() => {
        state(i);
    
    }, 1000+(i*1000));
    else{
        setTimeout(() => {

state("Time Up !")
        }, 1000+(i*1000));
    }
}
}
function End(){
    window.location.reload(false);
}
return(

    <>
    <div class="main"> 
    <div class="timer">
        <h4 class="current">{time}</h4>
        <input type="text" id="val" placeholder="Enter Seconds.."/>
        <button className="btn-dark" id="s" onClick={Loop}> Start </button>
        <button className="btn-dark" id="e" onClick={End}> Reset </button>
    </div>

    </div>
    <div class="main1"> 
     </div>
     </>
)
}
export default Home;