import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount]=useState(0)
    function increseCounter() {
        setCount(count+1)
    }
    function decreseCounter() {
        setCount(count-1)
    }

  return (
    <div className='container'>
        <div className='count-value'>Counter value : {count}</div>
        <div className='btn'>
        {/* <div className='count-btn'> */}
            <button onClick={increseCounter}>Increse</button>
        {/* </div> */}
        {/* <div className='count-btn'> */}
            <button onClick={decreseCounter}>Decrese</button></div>
        {/* </div> */}
    </div>
  )
}

export default Counter