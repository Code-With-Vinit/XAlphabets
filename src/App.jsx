import React,{useState} from 'react';
import './App.css'

function App() {
  const [input,setInput]=useState("");
  const arr=('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');

  const handleInput=(letter)=>{
    setInput(prev=>prev+letter);
  }

  const handleBackspace=()=>{
    setInput(prev=>prev.slice(0,-1));
  }

  return (
    <div className='output'>
        <h1>Alphabet Buttons</h1>
        <p>Click letters(or use your keyboard) to build text.</p>
        <input  value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Your text will appear here..." type="text"/>
        <br />
        <button onClick={handleBackspace}>Backspace</button>
        <br />
        {arr.map(char=>(
          <span key={char}>
            <button className="key" value={char} onClick={()=>handleInput(char)}>{char}</button>
            {char==='M'?<br />:""}
          </span>
        ))}

    </div>
  )
}

export default App
