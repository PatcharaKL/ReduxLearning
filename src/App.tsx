import React from "react";
import "./App.css";
import Login from "./component/login";
import Profile from "./component/profile";
import ChangeColor from "./component/ChangeColor";

const App = () => {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
};

export default App;
