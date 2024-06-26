import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import s from './CounterValue.module.css';
import Button from '../button/Button';

type PropsType = {
  minValue: number
  setMinValue: (value:number)=>void
  maxValue: number
  setMaxValue: (value:number)=>void
  count: number;
  setCount: (value:number)=>void
  minInputValue: number
  setMinInputValue: (value:number)=>void
  maxInputValue: number
  setMaxInputValue: (value:number)=>void
  inputFocus: boolean
  setInputFocus: (value: boolean) => void
};

function CounterValue({minValue, setMinValue, maxValue, setMaxValue, count, setCount, minInputValue, setMinInputValue, maxInputValue, setMaxInputValue, inputFocus, setInputFocus
}: PropsType) {
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)

  const onChangeMinInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    setMinInputValue(+e.currentTarget.value)
  }

  const onChangeMaxInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    setMaxInputValue(+e.currentTarget.value)
  }

  const onClickSetNewValueHandler = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(minValue));
    setCount(minInputValue)
    setMinValue(minInputValue)
    setMaxValue(maxInputValue)
    setDisabledBtn(true)
  };

  const onFocusHandler = () => {
    setInputFocus(true)
    setDisabledBtn(false)
  }
  const onBlurHandler = () => {
    setInputFocus(false)
  }

  return (
    <div className={s.counterValue}>
      <div className={s.inputField}>
        <div>
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
          disabled={minInputValue < 0 || minInputValue >= maxInputValue || disabledBtn}
        />
      </div>
    </div>
  );
}

export default CounterValue;

{/* <input value={minInputValue >= maxInputValue && minInputValue} /> */}