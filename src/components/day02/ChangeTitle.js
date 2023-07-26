import React, { useEffect, useState } from 'react'

const ChangeTitle = () => {
  
    useEffect(()=>{
        document.title = 'Updated Title';
    },[])
  return (
    <div></div>
  )
}

export default ChangeTitle