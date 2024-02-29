import React from 'react'
import { useEffect,useState } from 'react'

function Timer() {
 const [sec, setSec] = useState(0);
 const [min, setMin] = useState(0);
 const [hr , setHr] = useState(0);
 useEffect(()=>{
    const timer = setInterval(() => {
    setSec(sec + 1);
    if(sec === 59){
        setMin(min + 1);
        setSec(0)
    }else if(min === 59){
        setHr(hr + 1);
        setMin(0)
        setSec(0)
    }
}, 1000);
return () => clearInterval(timer);
 })

 const hadleRest = () =>{
    setHr(0)
    setMin(0)
    setSec(0)
 }

  return (
    <div style={{textAlign:"center"}}>
      <h1>timer Application</h1>
      <h1>{hr < 10 ? "0" + hr : hr}   : {min < 10 ? "0" + min : min} : {sec < 10 ? "0" + sec : sec}</h1>
      <button onClick={hadleRest}>Reset</button>
    </div>
  )
}

export default Timer
