import React, { useState } from 'react';
import Button from './Button';
import classes from './Counter.module.css';

const Counter = () => {
    const [counterValue, setCount] = useState(0);
    const increaseHandler = ()=>{
      
    setCount((preValue)=> preValue + 1);
    }
    const decreaseHandler = ()=>{
        if(counterValue >0 ){
            setCount((preValue)=> preValue - 1);
        }
  
    }
    const resetHandler = ()=>{
        
        setCount(0);
        }

  return (
    <div className={classes.counterContainer}>
        <div className={classes.counter}>{counterValue}</div>
        <div className={classes.btnContainer}>
           <Button title="Increase" onClick={increaseHandler} />
           <Button title="Reset" onClick={resetHandler} />
           <Button title="Decrease" onClick={decreaseHandler} />
        </div>
    </div>
  )
}

export default Counter