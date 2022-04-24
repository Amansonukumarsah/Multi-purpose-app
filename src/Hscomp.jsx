import React from 'react'
// import img from "../src/img/Aman.jpeg"
import {NavLink} from "react-router-dom";

const Hscomp = (props) => {
  return (
    <>
       <div className="col-md-4  text-center">
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-md-10 offset-2" style={{marginTop:'100px'}}>
                    <h1><span className="text-primary">Welcome</span> to {props.title}</h1>
                    <NavLink to={props.link}className="btn btn-primary">{props.btn}</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 text-center" >
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 text-center offset-2" style={{marginTop:'100px'}}>
                  <img className="img" src={props.imgsrc} alt="aman" srcset="" />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Hscomp;