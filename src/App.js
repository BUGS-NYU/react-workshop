import React, { useState } from 'react';
import Counter from './components/Counter'
import Button from './components/Button'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter count={count}/>
      <Button onClick={() => setCount(count + 1)}/>
    </div>
  );
}

export default App