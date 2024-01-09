import { useState } from "react";

function App() {

  let [counter, setcounter] = useState(10); 

  const addValue = () => { 
    if(counter<20){ 
    setcounter(counter+1); 
    }
    else{
    setcounter(counter); 
    }
  }
  
  const removeValue = () => { 
    if(counter>0){ 
      setcounter(counter-1); 
      }
      else{
      setcounter(counter); 
      }
  }
 

  return (
    <>
      <h1>chai</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
