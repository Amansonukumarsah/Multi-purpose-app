import React, { useState } from 'react'

const Todo = () => {

    const [data,setdata]=useState([])

    const [input,setinput]=useState("")

    const change=(event)=>{
        setinput(event.target.value)
    }

    const submit1=(e)=>{
        e.preventdefault()
        setdata((preval)=>{
           return [...preval,input];
        });
        setinput("")
    };
    return (
        <>
            <div className="text-center my-4">
               <h1 >Todo here</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div Id="todo" className="card" style={{height:'60vh'}}>
                                <div>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                        onChange={change} 
                                        />
                                        <button className="btn btn-outline-success" type="submit"
                                        onClick={submit1}
                                        >Add</button>
                                    </form>      
                                </div>
                                <div className="card-body">
                                    <ol>
                                        {
                                            data.map((val)=>{
                                                return <li>{val}</li>
                                            })
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
