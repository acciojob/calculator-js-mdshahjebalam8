//your JS code here. If required.
import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  
  function handleClick(e) {
    const value = e.target.value;
    
    switch (value) {
      case "+":
        setDisplay(prevDisplay => prevDisplay + "+");
        break;
      case "-":
        setDisplay(prevDisplay => prevDisplay + "-");
        break;
      case "*":
        setDisplay(prevDisplay => prevDisplay + "*");
        break;
      case "/":
        setDisplay(prevDisplay => prevDisplay + "/");
        break;
      case "(":
        setDisplay(prevDisplay => prevDisplay + "(");
        break;
      case ")":
        setDisplay(prevDisplay => prevDisplay + ")");
        break;
      case "C":
        setDisplay("");
        break;
      case "back":
        setDisplay(prevDisplay => prevDisplay.slice(0, -1));
        break;
      case "=":
        try {
          setDisplay(eval(display) + "");
        } catch (e) {
          setDisplay("Error");
        }
        break;
      default:
        setDisplay(prevDisplay => prevDisplay + value);
        break;
    }
  }

  return (
    <div>
      <input id="display" type="text" value={display} readOnly />
      <br />
      <button id="op" value="(" onClick={handleClick}>(</button>
      <button id="cl" value=")" onClick={handleClick}>)</button>
      <button id="C" value="C" onClick={handleClick}>C</button>
      <button id="back" value="back" onClick={handleClick}>back</button>
      <br />
      <button id="7" value="7" onClick={handleClick}>7</button>
      <button id="8" value="8" onClick={handleClick}>8</button>
      <button id="9" value="9" onClick={handleClick}>9</button>
      <button id="divi" value="/" onClick={handleClick}>/</button>
      <br />
      <button id="4" value="4" onClick={handleClick}>4</button>
      <button id="5" value="5" onClick={handleClick}>5</button>
      <button id="6" value="6" onClick={handleClick}>6</button>
      <button id="*" value="*" onClick={handleClick}>*</button>
      <br />
      <button id="1" value="1" onClick={handleClick}>1</button>
      <button id="2" value="2" onClick={handleClick}>2</button>
      <button id="3" value="3" onClick={handleClick}>3</button>
      <button id="-" value="-" onClick={handleClick}>-</button>
      <br />
      <button id="." value="." onClick={handleClick}>.</button>
      <button id="0" value="0" onClick={handleClick}>0</button>
      <button id="equal" value="=" onClick={handleClick}>=</button>
      <button id="plus" value="+" onClick={handleClick}>+</button>
    </div>
  );
}

export default Calculator;
