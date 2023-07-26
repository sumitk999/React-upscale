import React, { useState } from 'react'
import img from './images/lion.jpg'

const HideImage = () => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <button onClick={()=>{setShow(true)}}>Show</button>
        <button onClick={()=>{setShow(false)}}>Hide</button>
        <div>{
           show? <img src={img} alt="lion" />:null
              }
        </div>
    </div>
  )
}

export default HideImage