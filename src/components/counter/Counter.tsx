import React, { useEffect, useState } from 'react';
import s from './Counter.module.css'
import Button from '../button/Button';

type PropsType = {
  minValue: number
  maxValue: number
  count: number
  setCount: (value: number) => void
  inputFocus: boolean
  maxInputValue: number
  minInputValue: number
}

function Counter({minValue, maxValue, count, setCount, inputFocus, maxInputValue, minInputValue}: PropsType) {
  const [error, setError] = useState('')
  const blueMessage = "enter values and press 'set'";

  useEffect(() => {
    if(minInputValue >= maxInputValue || minInputValue < 0) {
      setError('incorect value')
    } else {
      setError('')
    }
  }, [minInputValue, maxInputValue]);

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
      <div className={count === maxValue ? s.valueItem : s.counterItem}>

        {!inputFocus && count}
        {inputFocus && !error  && <span className={s.message}>{blueMessage}</span>}
        {error && <span className={s.error}>{error}</span>}

      </div>
      <div className={s.btnStyle}>
        <Button 
          className={s.btn}
          title={'inc'} 
          callBack={incrementHandler}
          disabled={inputFocus || count === maxValue}
        />
        <Button 
          className={s.btn}
          title={'reset'} 
          callBack={resetHandler}
          disabled={inputFocus}
        />
      </div>
    </div>
  )
}

export default Counter

