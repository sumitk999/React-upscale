import React, { useState } from 'react'
import bulbOn from '../../images/blbon.jpg' 
import bulbOff from '../../images/blboff.jpg'

const ToggleBtn = () => {
    const [on,setOn]=useState(false)
  return (
    <div>
        <button onClick={()=>{setOn(!on)}}>{on? "OFF":"ON"}</button>
        <div >
           <img style={{width:"auto",height:'200px'}} src= {on?bulbOn:bulbOff}/>
        </div>
    </div>
  )
}

export default ToggleBtn