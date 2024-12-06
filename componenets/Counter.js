import React, { useState } from 'react'
import "../style.css"
const Counter = () => {
    const [count,  setCount] = useState(0);

   const handleClick = ()=>{
        setCount(count+1);
}
const handlClick =()=>{
    setCount(count-1)
}
  return (
    <div className='container'>
        <h1 className='number'>count: {count}</h1>
        <div className="btn-container">
            <button 
            onClick={handleClick}
            className='increment'
            >increment</button>
            <button 
            onClick={handlClick}
            className='increment'
            >decrement</button>
        </div>
        
    </div>
  )
}

export default Counter