import React from "react";
import "../App.css"

 function Disp({ handlenumbers, display , previousValue ,handleoperator,operator,handlecalc,setDisplay }) {
  return (
    <div className='container'>
<div className='box'>
  <div className='result'>
    <input  value={display} placeholder='Calculate...' className='display' type="text" readOnly/>
  </div>
  <div className='control'> 
  <div className='rows'>  {["7","8","9"].map((num) => <button onClick={()=>handlenumbers(num)} className='buttons' key={num}>{num}</button>)}
<button onClick={()=>handleoperator("/")} className='buttons ops'>/</button> 
  </div>
  <div className='rows'>  {["4","5","6"].map((num) => <button onClick={()=>handlenumbers(num)} className='buttons' key={num}>{num}</button>)}
<button onClick={()=>handleoperator("*")} className='buttons ops'>×</button> 
  </div>
  <div className='rows'>  {["1","2","3"].map((num) => <button onClick={()=>handlenumbers(num)} className='buttons' key={num}>{num}</button>)}
<button onClick={()=>handleoperator("+")} className='buttons ops'>+</button> 
  </div>
  <div className='rows'>  
<button  onClick={()=>setDisplay("0")} className='buttons clear'>C</button> 
<button  onClick={()=>handlenumbers("0")} className='buttons'>0</button> 
<button  onClick={handlecalc} className='buttons equal'>=</button> 
<button onClick={()=>handleoperator("-")} className='buttons ops '>-</button> 
  </div>

  </div>
     </div>
    </div>
  )
}


export default Disp;