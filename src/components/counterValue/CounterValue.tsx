import React, { ChangeEvent, useState } from 'react';
import s from './CounterValue.module.css';
import Button from '../button/Button';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { setCountAC, setErrorAC, setMaxInputValueAC, setMinInputValueAC } from '../../bll/countReducer';

type PropsType = {
  setInputFocus: (value: boolean) => void
};

function CounterValue({setInputFocus}: PropsType) {

  const min = useAppSelector(state => state.counter.min)
  const max = useAppSelector(state => state.counter.max)

  const dispatch = useDispatch()

  const [minInputValue, setMinInputValue] = useState(min)
  const [maxInputValue, setMaxInputValue] = useState(max)

  const onChangeMinInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value
    setMinInputValue(inputValue)
    if(inputValue < 0 || inputValue >= maxInputValue) {
      dispatch(setErrorAC('incorect value'))
    } else {
      dispatch(setErrorAC(''))
    }
  }

  const onChangeMaxInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.currentTarget.value
    setMaxInputValue(inputValue)
    if(minInputValue < 0 || minInputValue >= inputValue) {
      dispatch(setErrorAC('incorect value'))
    } else {
      dispatch(setErrorAC(''))
    }
  }

  const onClickSetNewValueHandler = () => {
    dispatch(setCountAC(minInputValue))
    dispatch(setMinInputValueAC(minInputValue))
    dispatch(setMaxInputValueAC(maxInputValue))
    setInputFocus(false)
  };

  const onFocusHandler = () => {
    setInputFocus(true)
  }
  const onBlurHandler = () => {
    setInputFocus(false)
  }

  return (
    <div className={s.counterValue}>
      <div className={s.inputField}>
        <div className={s.value}>
          <span>max value:</span>
          <input
            className={minInputValue >= maxInputValue ? s.inputRed : s.inputStyle}
            onChange={onChangeMaxInputValue}
            value={maxInputValue}
            type="number"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />      
        </div>
        <div>
          <span>start value:</span>
          <input
            className={minInputValue < 0 || minInputValue >= maxInputValue ? s.inputRed : s.inputStyle}
            onChange={onChangeMinInputValue}
            value={minInputValue}
            type="number"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />      
        </div>
      </div>
      <div className={s.btnField}>
        <Button 
          className={s.btn}
          title={'set'} 
          callBack={onClickSetNewValueHandler}
          disabled={minInputValue < 0 || minInputValue >= maxInputValue}
        />
      </div>
    </div>
  );
}

export default CounterValue;