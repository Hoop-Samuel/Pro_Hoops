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


function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="programs" element={<Basketball/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="collections" element={<Collections/>}/>
        <Route path="cart" element={<Shop/>}/>
        <Route path="person" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
