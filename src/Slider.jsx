import React, { useState } from 'react'
// import Slider from './Compimg/Slider';
import img from "../src/img/Aman.jpeg"
import logo from "../src/img/Logo.jpeg"
import man from "../src/img/man.jpg"
import edu from "../src/img/edu.jpg"
// import Slidata from "./Slidata";
const Slider = () => {
  const [data,setdata]=useState('')
  const [count,setcount]=useState(0)
  const click=()=>{
    setcount(count + 1)
    if(count===1)
    {
      setdata(logo)
    }
    else if(count===2)
    {
      setdata(edu)
    }
    else{
      setdata(man)
      if(count===3)
      {
        setcount(0)
      }
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 text-center my-5">
            <div className="hello">
              <img style={{height:'200px',width:'200px'}} src={(count===0)?img:data} alt="aman" />
            </div>
            <button onClick={click} className="btn btn-primary my-3">Next</button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}

export default Slider;
