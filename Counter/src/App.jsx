import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter]= useState(0);

let addValue = () =>{
  

  if(counter < 20){
    counter = counter + 1
    setCounter(counter)
  }
  else{
    console.log("You have reached limit")
  }

}

let removeValue = () =>{
  if(counter > 0 ){
    counter = counter - 1
  setCounter(counter)
  }
  else{
    console.log("You have reached the base value")
  }

  
}


  return (
    <>
      <h1>Counter Project</h1>
      <h2>Click Add or Remove to perform operation</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
