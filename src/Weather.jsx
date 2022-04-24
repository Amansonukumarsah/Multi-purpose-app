import React from 'react'
import './components/Digital/digital.css'
const Weather = () => {
  return (
    <>
      <div className="text-center text-danger my-2">
        <h1>Weather details</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 weather card text-center" style={{ height: '50vh', width: '300px' }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit"
              >Search</button>
            </form>
            <div className="animated my-2">
              <div className="first"></div>
              <div className="second"></div>
              <div className="third"></div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}

export default Weather;
