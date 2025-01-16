import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"; 

import Menu from "./menu/Menu"; 

/*Pages*/
import Basketball from './basketball/Basketball';
import About from './about/About';
import Collections from './collections/Collections';
import Shop from "./shop/Shop";
import Login from "./login/Login";
import Register from "./login/Register";
import BasketballPrograms from "./basketball/programs/BasketballPrograms";


function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="programs" element={<Basketball/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="gallery" element={<Collections/>}/>
        <Route path="cart" element={<Shop/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="training" element = {<BasketballPrograms/>}/>
      </Routes>
    </div>
  );
}

export default App;
