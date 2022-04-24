import React from "react";
// import {NavLink} from "react-router-dom"
// import {useLocation , useParams } from "react-router-dom";
import Cardcomp from "./Cardcomp";
import Imgdata from "./Imgdata";

const Services = () => {
  return (
    <>
    <div className="text-center text-black my-3">
      <h1>Our service Page</h1>
    </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex">
            {
              Imgdata.map((val,ind)=>{
                return(
                  <Cardcomp  key={ind} imgsrc={val.imgsrc} title={val.title}  text={val.text}/>
              )
              })
            }
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}
export default Services;


// const {fname}=useParams()
// const location=useLocation()
// console.log(location)
    // {/* <h1>Hey! {props.useParams.fname} Welcome To My Website</h1> */}