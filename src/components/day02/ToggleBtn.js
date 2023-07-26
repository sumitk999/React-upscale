import React, { useState } from 'react'
import bulbOn from './images/bulbOn.png' 
import bulbOff from './images/bulbOff.png'

const ToggleBtn = () => {
    const [on,setOn]=useState(false)
  return (
    <div>
        <button onClick={()=>{setOn(!on)}}>{on? "OFF":"ON"}</button>
        <div >
           <img style={{width:"400px",height:'400px'}} src= {on?bulbOn:bulbOff}/>
        </div>
    </div>
  )
}

export default ToggleBtn