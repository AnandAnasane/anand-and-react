import { useCallback, useEffect, useState } from 'react'

function App() {

  const [length, setlength]= useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '@#$%^&*!~?+=<>'

    for (let i = 1; i <= length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char) 
    }

    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword] )

    useEffect(()=>{
      passwordGenerator()
    },  [length, numberAllowed, charAllowed, passwordGenerator])
 

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg bg-gray-400 px-8 my-8 py-6">
        <h1 className="text-center font-medium text-4xl mb-3">Password Generator</h1>
        <div className="flex shadow rounded-4xl overflow-hidden mb-8">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white rounded-s-full"
            placeholder="Password"
            readOnly
          />
          <button className="bg-blue-600 text-white px-5 py-1">Copy</button>
        </div>
        <div className='flex text-sm  text-orange-950 gap-x-2'>
          <div className='flex items-center gap-x-2 me-5 '>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center me-5 gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App
