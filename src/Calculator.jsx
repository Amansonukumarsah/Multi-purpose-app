import {React,useState} from 'react'
import Calcomponent from './Calcomponent'
const Calculator = () => {
  const [calculator, setCalculator] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 text-center">
            <h1 className="my-3 text-danger">Calculator</h1>
            <div className="my-2">
              <div className="">
                <input type="text" value={calculator} />
              </div>
              <div className="my-3">
                <Calcomponent
                c={1}
                calculator={calculator}
                setCalculator = {setCalculator}
                 />
              </div>
              <div className="my-3">
                <Calcomponent 
                c={4}
                calculator={calculator}
                setCalculator = {setCalculator}
                />
              </div>
              <div className="my-3">
                <Calcomponent 
                c={7}
                calculator={calculator}
                setCalculator = {setCalculator}
                />
              </div>
              <Calcomponent c={"Aman"} calculator={calculator}
                setCalculator = {setCalculator} />
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}

export default Calculator;
