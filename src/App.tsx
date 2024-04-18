import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import CounterValue from './components/counterValue/CounterValue';

function App() {

  const getFromStorage = () => {
    let minNumber = JSON.parse(localStorage.getItem('startValue'));
    let maxNumber = JSON.parse(localStorage.getItem('maxValue'));
    return {
      minNumber: minNumber ? minNumber : 0,
      maxNumber: maxNumber ? maxNumber : 0,
    };
  };

  const [minValue, setMinValue] = useState<number>(getFromStorage().minNumber);
  const [maxValue, setMaxValue] = useState<number>(getFromStorage().maxNumber);
  const [count, setCount] = useState<number>(minValue);
  const [minInputValue, setMinInputValue] = useState<number>(minValue)
  const [maxInputValue, setMaxInputValue] = useState<number>(maxValue)
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [valueRed, setValueRed] = useState(false);

  useEffect(()=>{
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(minValue));
},[count])

  return (
    <div className="App">
      <CounterValue
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        count={count}
        setCount={setCount}
        minInputValue={minInputValue}
        setMinInputValue={setMinInputValue}
        maxInputValue={maxInputValue}
        setMaxInputValue={setMaxInputValue}
        valueRed={valueRed}
        setValueRed={setValueRed}
      />
      <Counter
        minValue={minValue}
        count={count}
        setCount={setCount}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        valueRed={valueRed}
        setValueRed={setValueRed}
      />
    </div>
  );
}

export default App;

// useEffect(()=>{
//   localStorage.setItem('counterValue', JSON.stringify(count))
// },[count])

// useEffect(()=>{
//   let valueAsString = localStorage.getItem('startValue')
//   if(valueAsString) {
//     let value = JSON.parse(valueAsString)
//     setCount(value)
//   }
// },[])

// const incHandler = () => {
//   setCount(count + 1)
// }

// const setTooLocalStorageHandler = () => {
//   localStorage.setItem('counterValue', JSON.stringify(count))
//   // localStorage.setItem('counterValue + 1', JSON.stringify(count + 1))
//   setCount(0)
// }

// const getFromLocalStorageHandler = () => {
//   let valueAsString = localStorage.getItem('counterValue')
//   if(valueAsString) {
//     let value = JSON.parse(valueAsString)
//     setCount(value)
//   }
// }

// const clearLocalStorageHandler = () => {
//   localStorage.clear()
//   setCount(0)
// }

// const removeItemFromLocalStorageHandler = () => {
//   localStorage.removeItem('counterValue + 1')
// }

{
  /* 
      <h1>{count}</h1>
      <button onClick={incHandler}>inc</button>
      <button onClick={setTooLocalStorageHandler}>setTooLocalStorage</button>
      <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
      <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
      <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button> */
}
