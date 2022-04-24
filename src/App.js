// Differnece between component and render is :-In component we create things again and again but in render we create first time and after that it update the value 
import React from 'react';
import {Route, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home'
import Menu from './Menu';
import Digital from './Digital';
import Services from './Services';
import Todo from './Todo';
import Slider from './Slider';
import Weather from './Weather';
import Calculator from './Calculator';
import Gmail from './Gmail';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import  from './User';

const App=()=>{
  return (
    <>
    <Menu/>
    <nav>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/digital" element={<Digital />} />
        <Route exact path="/slider" element={<Slider />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/gmail" element={<Gmail />} />
      </Routes>
    </nav>
    </>
  )
}

export default App;



// useParams hooks:-