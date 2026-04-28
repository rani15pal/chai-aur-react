import React from 'react'

const App = () => {

  // function btnClicked(){
  // console.log("button was clicked");
  // }


  function mouseEnter(){
    console.log("mouseenter successful");
  }

  function inputChanging(value){
    console.log(value)
  }

  return (
    <div>

    {/* <button  className='btn1' onClick={btnClicked} onMouseEnter={mouseEnter}> CLICKED HERE ..</button>
    <button className='btn2'  onClick={btnClicked} onMouseEnter={mouseEnter}> EXLPORE THIS</button>
     */}

     {/* FUNCTION CREATE  INSIDE THE BUTTON  */}

     <button onClick={function(){
      console.log("HELLOOOO... GUYSSSS ")
     }}> 

      hello guys 

     </button>
     
     <br />

     {/* <input  onChange={inputChanging}     type="text"  placeholder='Enter your name  '/> */}
     <h1>OR</h1>
     <input  onChange={function(elem){
     inputChanging(elem.target.value);

     }}     type="text"  placeholder='Enter your name  '/>

    </div>

  )
}

export default App