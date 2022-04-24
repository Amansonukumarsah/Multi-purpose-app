import React from 'react';
import Hscomp from './Hscomp';
import logo from "../src/img/Logo.jpeg"


const About=()=>{
    return (
        <>
          <div className="container-fluid">
            <div className="row">
              <Hscomp
               imgsrc={logo}
               title="About Page"
               link="/"
               btn="Go to Home"
              />
            </div>
          </div>
        </>
    )
}

export default About;