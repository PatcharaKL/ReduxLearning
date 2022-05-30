import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login:any = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={()=>{
        {dispatch(login({ name: "Patchara K.", age: 21, email: "620107030016@dpu.ac.th" }))}
      }}>login</button>
      <button onClick={()=>{
        {dispatch(logout())}
      }}>logout</button>
    </>
    
  );
};

export default Login;
