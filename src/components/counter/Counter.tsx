import React, { useEffect, useState } from 'react';
import s from './Counter.module.css'
import Button from '../button/Button';


type PropsType = {
  minValue: number
  maxValue: number
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  setValueError: (value: string | null)=>void
}

function Counter({minValue, maxValue, count, setCount, setValueError}: PropsType) {

//   useEffect(() => {
//     if() {
//       setValueError("enter values and press 'set'")
//     }
// }, []);

  const incrementHandler = () => {
    if(count < maxValue) {
      setCount(count + 1)
    }
  }

  const resetHandler = () => {
    setCount(minValue)
  }

  return (
    <div className={s.counter}>
      <div className={count === maxValue ? s.valueItem : s.counterItem}>{count}</div>
      <div className={s.btnStyle}>
        <button className={s.btn} disabled={count === maxValue} onClick={incrementHandler}>inc</button>
        <button className={s.btn} onClick={resetHandler}>reset</button>
        {/* <Button title={'inc'} callBack={()=>{}}/>
        <Button title={'reset'} callBack={()=>{}}/> */}
      </div>
    </div>
  )
}

export default Counter