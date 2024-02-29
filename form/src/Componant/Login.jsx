import React from "react";
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

function Login() {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');

    const {login} = useContext(AuthContext);

    const handleLogin = async() =>{
        try {
            const userDetails = {
                email,
                password
            };
            const res = await fetch('https://reqres.in/api/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails)
            });
            const jsonData = await res.json()
            login(jsonData.token)
        } catch (error) {
            console.log(error)
        }
    };
    
     console.log(email,password)

  return (
    <div>
        <h1 style={{textAlign:'center'}}>login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        style={{textAlign:"center"}}
      >
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
