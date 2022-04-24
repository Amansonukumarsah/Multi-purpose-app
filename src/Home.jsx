import React from "react";
import Hscomp from "./Hscomp"
import img from "../src/img/Aman.jpeg"
// import {useLocation , useParams } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Hscomp
           imgsrc={img}
           title="my Website"
           link="/contact"
           btn="Go to Contact"
          />
        </div>
      </div>
    </>
  );
}

export default Home;


// const {fname}=useParams()
    // const location=useLocation()
    // console.log(location)
    // {/* <h1>Hey! {props.useParams.fname} Welcome To My Website</h1> */}