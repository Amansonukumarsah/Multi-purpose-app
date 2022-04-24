import React, { useState } from 'react';
const Contact = () => {
  const [data,setdata]=useState(
    {
      Text:'',
      email:'',
      password:'',
      checkbox:''
    }
  )
  const change=(event)=>{
    const {name,value}=event.target
    setdata((preval)=>{
     return{
       ...preval,
       [name]:value
     }
    })
  }

  const submit=()=>{
    alert(`Your Name ${data.Text} , your Email ${data.email},your password ${data.password}`)
  }

  return (
    <>
      <div>
        <h1 className="text-black text-center my-5">Contact here</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">

            <form onSubmit={submit}>

              <div class="form-group my-4">
                <label for="Name">Name</label>
                <input 
                type="Text" 
                className="form-control" 
                id="Name" 
                name="Text"
                value={data.Text}
                aria-describedby="emailHelp" 
                placeholder="Enter your Name"
                onChange={change}
                />
              </div>


              <div class="form-group my-4">
                <label for="exampleInputPassword1">Email</label>
                <input 
                type="email" 
                className="form-control"
                name="email"
                value={data.email}
                id="exampleInputPassword1" 
                placeholder="Email"
                onChange={change}
                />
              </div>


              <div class="form-group my-4">
                <label for="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={change}
                />
              </div>


              <div class="form-check my-4">
                <input 
                type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1"
                name="checkbox"
                value={data.checkbox}
                onChange={change}
                />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>


              <button type="submit" class="btn btn-primary">Submit</button>

            </form>

          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default Contact;