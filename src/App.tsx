import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import CounterValue from './components/counterValue/CounterValue';

function App() {

  const [inputFocus, setInputFocus] = useState<boolean>(false)

  return (
    <div className="App">
      <CounterValue setInputFocus={setInputFocus}/>
      <Counter inputFocus={inputFocus}/>
    </div>
  );
}

export default App;


