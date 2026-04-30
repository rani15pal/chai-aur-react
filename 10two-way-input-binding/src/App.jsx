import React, { useState } from 'react'

const App = () => {
  // form submit - prevent 
  const submitHandler = (e) => {
  e.preventDefault()

  setName(''); //again form empty ho jaegaa
  }

  // input handling
  const [name, setName] = useState('');

  return (

    <div>
    <form onSubmit={(e) => {
           submitHandler(e)
    }}>
    <input 
       type="text" 
        placeholder='enter your name '
        value={name}
        onChange={(e) => setName(e.target.value)}
        
    />

    <button> submit </button>

    <h1>Your Name Is : {name} </h1>

    </form>
    </div>
  )
}

export default App