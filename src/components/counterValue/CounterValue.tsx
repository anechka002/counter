import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import s from './CounterValue.module.css';
import Button from '../button/Button';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { setCountAC, setMaxInputValueAC, setMinInputValueAC } from '../../bll/countReducer';

type PropsType = {
  setInputFocus: (value: boolean) => void
};

function CounterValue({setInputFocus}: PropsType) {

  const min = useAppSelector(state => state.counter.min)
  const max = useAppSelector(state => state.counter.max)
  const dispatch = useDispatch()

  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)

  // useEffect(() => {
  //   dispatch(setMinInputValueAC(min))
  //   dispatch(setMaxInputValueAC(max))
  // }, [dispatch, min, max])

  const onChangeMinInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinInputValueAC(+e.currentTarget.value))
  }

  const onChangeMaxInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxInputValueAC(+e.currentTarget.value))
  }

  const onClickSetNewValueHandler = () => {
    dispatch(setCountAC(min))
    dispatch(setMinInputValueAC(min))
    dispatch(setMaxInputValueAC(max))
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
            className={min >= max ? s.inputRed : s.inputStyle}
            onChange={onChangeMaxInputValue}
            value={max}
            type="number"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />      
        </div>
        <div>
          <span>start value:</span>
          <input
            className={min < 0 || min >= max ? s.inputRed : s.inputStyle}
            onChange={onChangeMinInputValue}
            value={min}
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
          disabled={min < 0 || min >= max || disabledBtn}
        />
      </div>
    </div>
  );
}

export default CounterValue;

{/* <input value={minInputValue >= maxInputValue && minInputValue} /> */}