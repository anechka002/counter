import React, { useEffect, useState } from 'react';
import s from './Counter.module.css'
import Button from '../button/Button';


type PropsType = {
  minValue: number
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  isDisabled: boolean
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
  valueRed: boolean
  setValueRed: React.Dispatch<React.SetStateAction<boolean>>
}

function Counter({minValue, count, setCount, isDisabled, setIsDisabled, valueRed, setValueRed}: PropsType) {

  useEffect(() => {
    const valueRedFromLocalStorage = localStorage.getItem('maxValue');
    if (valueRedFromLocalStorage) {
        setValueRed(JSON.parse(valueRedFromLocalStorage));
    }
}, []);

//     const valueRedFromLocalStorage = localStorage.getItem('starValue');
//     if (valueRedFromLocalStorage) {
//       JSON.parse(valueRedFromLocalStorage);
//       setValueRed(valueRed)
//     }
// }, []);

  const incrementHandler = () => {
    setCount(count + 1)
    sumSetCount()
  }

  const resetHandler = () => {
    setCount(minValue)
    setValueRed(false)
  }

  const sumSetCount = () => {
    let valueAsNumber = localStorage.getItem('maxValue')
    if(valueAsNumber) {
      let value = JSON.parse(valueAsNumber)
      if(count === value) {
        setCount(value)
        setIsDisabled(true)
        setValueRed(true)
      } 
    }
  }

  return (
    <div className={s.counter}>
      <div className={valueRed ? s.valueItem : ''}>{count}</div>
      <button disabled={isDisabled} onClick={incrementHandler}>inc</button>
      <button onClick={resetHandler}>reset</button>
      {/* <Button title={'inc'} callBack={()=>{}}/>
      <Button title={'reset'} callBack={()=>{}}/> */}
    </div>
  )
}

export default Counter