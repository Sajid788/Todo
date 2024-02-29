import React, { useState } from 'react'

function Login() {
const [user, setUser] = useState("")
const [password, setPassword] = useState("")
  
const formHandle = (e)=>{
   e.preventDefault();
   if(!user || !password){
    alert(" please enter both details");
    return;
   }
   if(user === "sajid" && password === '123'){
    alert(`welcome ${user}`);
   }else{
     alert ("Unauthorized use")
   } 
   setUser('')  
   setPassword('')
}

  return (
     <form onSubmit={formHandle}  style={{textAlign:"center"}} >
        <h1>Login application</h1>
        <h3>Username:</h3>
        <input type="text" placeholder='enter username' value={user}
         onChange={(e) =>setUser(e.target.value)}
         />
        <h3>Password:</h3>
        <input type="password" placeholder=' enter password' value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button>submit</button>
     </form>
  )
}

export default Login
