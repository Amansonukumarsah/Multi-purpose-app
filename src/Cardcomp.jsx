import React from 'react'
import {NavLink} from "react-router-dom"
const Cardcomp = (props) => {
  return (
    <>
      <div className="card mx-5" style={{width: '18rem'}}>
              <img src={props.imgsrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.text}</p>
                  <NavLink to="#" className="btn btn-primary">GO to Cart</NavLink>
                </div>
            </div>

    </>
  )
}

export default Cardcomp;
