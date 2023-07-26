import React, { useState } from 'react'
import './Forms.css'
const Forms = () => {
    const [text,setText]= useState('')
    const [number,setNumber]= useState('')
    const [password,setPassword]= useState('')
   function displayValue() {
    alert(`Input text : ${text}\nInput Number : ${number}\nInput password : ${password}`)
   }
  return (
    <div>
        <div> <input type='text' placeholder='Enter Text here' onChange={(e)=>{setText(e.target.value)}}/></div>
        <div> <input type='number' placeholder='Enter number here' onChange={(e)=>{setNumber(e.target.value)}}/></div>
        <div><input type='password' placeholder='Enter password here' onChange={(e)=>{setPassword(e.target.value)}}/></div>
        <button onClick={displayValue}>Submit</button>
    </div>
  )
}

export default Forms