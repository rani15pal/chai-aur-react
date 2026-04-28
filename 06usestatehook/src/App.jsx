import React from 'react'
import { useState } from 'react'

const App = () => {
  // const [first, setfirst] = useState(second);
  const [num , setNum] = useState(10); //num
  const [username , setUsername] = useState("riya"); //string
  const [] = useState(); //array


  function changeNum (){
    setNum(30);
    setUsername('Shishank');
  }

  // CODE FOR COUNTER 
  const [count , setCount] = useState(0);
  // for increament
  function increaseNum(){
  setCount(count+1);
  }

    // for decreament
  function decreaseNum(){
  setCount(count-1);
    
  }



  return (

    <>
      <div>
        <h1>value of a is {num}  <br /> value of user is {username}</h1>
      <button onClick={ changeNum }> cliked</button>
      </div>

      <hr />
      <hr />

      <div className="counter">
        <h2>  ( :this is my counter app :)</h2>
        <h1>{count}</h1>
        <button onClick={increaseNum} >Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
      </div>

    </>
  )

}

export default App