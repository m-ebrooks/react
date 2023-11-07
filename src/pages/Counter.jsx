import {useState, useEffect} from 'react'

export default function Counter() {
 const [counter, setCounter] = useState(0)

 function changeCount(value){
        setCounter(counter + value)
 }

 useEffect(() => {
    // alert("This component got mounted")
 }, [])
 
  return (
    <div className="bg-blue-600 grid place-items-center border-4 border-blue-900 m-10">
        <button onClick={() => changeCount(1)}>+</button>
        <span>{counter}</span>
        <button onClick={() => changeCount(-1)}>-</button>
    </div>
  )
}
