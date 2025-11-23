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
    <div className='container'>
        <h1>Alphabet Buttons</h1>
        <p>Click letters(or use your keyboard) to build text.</p>
        <div className='output'>
            {/* <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Your text will appear here..." type="text"/> */}
            {input}
        </div>
        <br />
        <div className='backspace-container'>
            <button onClick={handleBackspace}>Backspace</button>
        </div>
        <br />
        <div>
          {arr.map(char=>(
          <span key={char}>
            <button className="key" value={char} onClick={()=>handleInput(char)}>{char}</button>
            {char==='M'?<br />:""}
          </span>
        ))}


        </div>
        
    </div>
  )
}

export default App
