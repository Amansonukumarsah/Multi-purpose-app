import React from 'react'
import { useEffect,useState } from 'react'

const Calcomponent = (props) => {
    const {calculator, setCalculator, c} = props;

    const Click=(val)=>{
        if (val === 'Enter'){
            let solve = eval(calculator);
            setCalculator(solve);
            return;
        }
        let oldValue = calculator;
        oldValue += val;
        setCalculator(oldValue);
    }
  return (
        <div className="container-fluid">
            {
                c !== "Aman"?(
                    <div className="row calculator">
                        <div className="col-4">
                            <button onClick={()=>Click(c)} value={c} style={{width:'80px'}} className="border border-danger">{c}</button>
                        </div>
                        <div className="col-4">
                            <button onClick={()=>Click(c+1)} value={c+1} style={{width:'80px'}} className="border border-danger">{c+1}</button>
                        </div>
                        <div className="col-4">
                            <button onClick={()=>Click(c+2)} value={c+2} style={{width:'80px'}} className="border border-danger">{c+2}</button>
                        </div>
                    </div>
                ):(
                    <div className="container-fluid">
                        <div className="row calculator">
                                <div className="col-4">
                                    <button className="border border-danger" 
                                    onClick={()=>Click('+')}>+</button>
                                </div>

                                <div className="col-4">
                                    <button className="border border-danger" onClick={()=>Click('-')} >-</button>
                                </div>

                                <div className="col-4">
                                    <button className="border border-danger" onClick={()=>Click('/')}>/</button>
                                </div>
                                <div className="col-4 my-4">
                                    <button className="border border-danger" onClick={()=>Click('*')} >*</button>
                                </div>
                                <div className="col-4 my-4">
                                    <button className="border border-danger" onClick={()=>Click('0')} >0</button>
                                </div>
                                <div className="col-4 my-4">
                                <button className="border border-danger" onClick={()=>Click('Enter')} >Enter</button>
                                </div>
                        </div>
                    </div>
                )
            }
        </div>
  )
}

export default Calcomponent;
