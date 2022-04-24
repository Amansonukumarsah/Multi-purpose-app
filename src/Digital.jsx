import React, { useState, useEffect } from 'react';
// setinteval()
// clearInterval()
// setTimeout()
// clearTimeout()
// flashtext()
// loop()
const Digital = () => {
    // var cn;
    const [daynight, setDayNight] = useState('AM');
    const [date,setdate]=useState()
    const func=()=>{
        const Time=new Date().toLocaleTimeString();
        const time=new Date().getHours()
        setdate(Time)

        let temp = time[time.length -2] + time[time.length -1];
        setDayNight(temp);
    }
    useEffect(()=>{
        setInterval(func,1000);
    })
  return (
    <>
       <div className={`text-center my-2 ${daynight === 'AM'?"day":"night"}`}>
           <h1 className='text-primary'>Digital Clock</h1>
       </div>
       <div className="containrt-fluid my-5">
           <div className="row">
               <div className="col-4"></div>
               <div className="col-4 text-center">
                   <h1>{date}</h1>
               </div>
               <div className="col-4"></div>
           </div>
       </div>
    </>
  )
}

export default Digital;
