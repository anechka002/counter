import React, { ChangeEvent, useEffect, useState } from 'react';
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
  valueRed: boolean
  setValueRed: React.Dispatch<React.SetStateAction<boolean>>;
};

function CounterValue({minValue, setMinValue, maxValue, setMaxValue, count, setCount, minInputValue, setMinInputValue, maxInputValue, setMaxInputValue, valueRed, setValueRed
}: PropsType) {

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
  };


  return (
    <div className={s.counterValue}>
      <div className={s.inputField}>
        <div>
          <span>max value:</span>
          <input
            className={s.inputStyle}
            onChange={onChangeMaxInputValue}
            value={maxInputValue}
            type="number"
          />      
        </div>
        <div>
          <span>start value:</span>
          <input
            className={s.inputStyle}
            onChange={onChangeMinInputValue}
            value={minInputValue}
            type="number"
          />      
        </div>
      </div>
      <div className={s.btnField}>
        {/* <button onClick={onClickSetNewValueHandler}>set</button> */}
        <Button 
          className={s.btn}
          title={'set'} 
          callBack={onClickSetNewValueHandler}
        />
      </div>
    </div>
  );
}

export default CounterValue;