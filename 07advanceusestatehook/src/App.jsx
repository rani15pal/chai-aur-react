import React, { useState } from 'react'

const App = () => {
   const [num, setNum] = useState({user:"shishank", age:27});

   const btnClicked = () =>{

    const newNum = {...num};
    newNum.user = 'Riya';
    newNum.age = 25;
    setNum(newNum);
    

   }

  return (

    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}> Click Me </button>
    </div>
  )

}

export default App
