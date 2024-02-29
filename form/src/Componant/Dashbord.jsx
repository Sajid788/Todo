import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Dashbord() {
  const { token, logout } = useContext(AuthContext);
  return (
    <div style={{textAlign:'center'}}>
      <h1>Dash Board</h1>
      <h3>Token: {token}</h3>
      <button
        onClick={() => {
          logout();
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Dashbord;
