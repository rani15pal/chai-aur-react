

import react, { useState } from  'react'

function App() {
 
  // let counter = 5 ;

  let  [counter, setCounter]  = useState (15);

  const addValue = () => {
    // console.log("value added ", counter);
    // counter = counter + 1; 
    setCounter(counter + 1);

  }

  const removeValue = () => {
    // console.log("value removed ", counter);
    // counter = counter - 1; 
    setCounter(counter - 1);

  }

  return (
   <>
    <h1> counter project</h1>
    <h3> counter value: {counter} </h3>

    <button onClick={addValue}>ADD Value {counter}</button>

     <br />

    <button onClick={removeValue}>REMOVE Value{counter}</button>

    <p>foooter :{counter}</p>
   </>
  )
}

export default App
