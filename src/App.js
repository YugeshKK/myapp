import { Navbar } from './Navbar';
import { Main } from './Main';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput]= useState(null);

  const handleClick=(data)=>{
    setInput(data);
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick}/>
      <Main  input={input}/>
    </div>
  );
}

export default App;
