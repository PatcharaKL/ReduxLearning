import React from "react";
import { useSelector } from "react-redux";

const Profile: any = () => {
  const user = useSelector((state: any) => state.user.value);
  const themeColor = useSelector((state: any)=> state.theme.value )
  return (
    <div style={{backgroundColor: themeColor,}}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email:{user.email} </p>

    </div>
  );
};

export default Profile;
