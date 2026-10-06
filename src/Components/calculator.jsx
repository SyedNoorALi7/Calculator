import React from 'react'
import Disp from './Disp'
import "../App.css"
 function Calculator() {
  const [display,setDisplay] = React.useState("0");
  const [previousValue,setPreviousValue] =React.useState(null)
  const [operator,setOperator] = React.useState(null)
  const handlenumbers = (num) => {
  
      setDisplay(display === "0" ? String(num): display + String(num))
  }
  function handleoperator(opt){
    setPreviousValue(display)
    setOperator(opt)
    setDisplay("0")
  }
  function handlecalc(){
if(!previousValue || !operator){return;}
const x = parseFloat(previousValue);
const y = parseFloat(display);
switch (operator){
  case "+":
    setDisplay(String(x+y))
    break;
    case "-":
    setDisplay(String(x-y))
    break;
    case "*":
    setDisplay(String(x*y))
    break;
    case "/":
    setDisplay(String(x/y))
    break;
}
  }

  return (
    <Disp 
    handlenumbers={handlenumbers}
    handleoperator={handleoperator}
    handlecalc={handlecalc}
    display={display}
    previousValue={previousValue}
    operator={operator}
    setDisplay={setDisplay}
    
/>
  )
}
export default Calculator
