import React, {useState,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"; 

/* Screen Loader*/
import LottieLoader from "./loader/LottieLoader";

/* Menu*/
import ResponsiveMenu from "./menu/ResponsiveMenu";

/*Pages*/
import Basketball from './basketball/Basketball';
import About from './about/About';
import Collections from './collections/Collections';
import Shop from "./shop/Shop";
import Login from "./login/Login";
import Register from "./login/Register";
import BasketballPrograms from "./basketball/programs/BasketballPrograms";

function App() {

  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading process (e.g., fetching data, preloading resources)
    setTimeout(() => {
      setLoading(false); // Set loading to false once content is loaded
    }, 3000); // Simulating a 3-second load time, adjust as necessary
  }, []);

  return (
    <div className="App">
       {/* Show the LottieLoader until the page is fully loaded */}
       {loading && <LottieLoader />}
      
      <ResponsiveMenu/>

      <Routes>
        <Route path="/" element={<Basketball/>}/>
        <Route path="home" element={<Basketball/>}/>
        <Route path="meetthecoach" element={<About/>}/>
        <Route path="photogallery" element={<Collections/>}/>
        <Route path="gearup" element={<Shop/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="trainingprograms" element = {<BasketballPrograms/>}/>
      </Routes>
    </div>
  );
}

export default App;
