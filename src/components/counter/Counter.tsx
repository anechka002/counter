import React, { useEffect, useState } from 'react';
import s from './Counter.module.css'
import Button from '../button/Button';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { incValueAC, resetValueAC } from '../../bll/countReducer';

type PropsType = {
  inputFocus: boolean
}

function Counter({inputFocus}: PropsType) {
  
  const count = useAppSelector(state => state.counter.count)
  const min = useAppSelector(state => state.counter.min)
  const max = useAppSelector(state => state.counter.max)
  const dispatch = useDispatch()
  
  const [error, setError] = useState('')
  const blueMessage = "enter values and press 'set'";

  useEffect(() => {
    if(min >= max || min < 0) {
      setError('incorect value')
    } else {
      setError('')
    }
  }, [min, max]);

  const incrementHandler = () => {
    if(count < max) {
      dispatch(incValueAC())
    }
  }

  const resetHandler = () => {
    dispatch(resetValueAC())
  }

  return (
    <div className={s.counter}>
      <div className={count === max ? s.valueItem : s.counterItem}>

        {!inputFocus && count}
        {inputFocus && !error  && <span className={s.message}>{blueMessage}</span>}
        {error && <span className={s.error}>{error}</span>}

      </div>
      <div className={s.btnStyle}>
        <Button 
          className={s.btn}
          title={'inc'} 
          callBack={incrementHandler}
          disabled={inputFocus || count === max}
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

