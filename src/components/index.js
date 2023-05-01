import "./index.css"
import {Form,Button,Card} from "react-bootstrap"
import React, { useState } from 'react'

const Calculator = () => {
 const [result,setResult]=useState("")

 const handleClick=(e)=>{
    setResult(result.concat(e.target.name))
 }
 const clear=()=>{
setResult("")
 }
 const calculate = () => {
    if (result === "") {
      alert("Please enter a value to calculate");
    } else {
      setResult(eval(result).toString());
    }
  };
  
  return (
    <div className="container">
<Card>
    <Form>
    <Form.Control type="text" className="input" value={result}/>
    <div className="parent ">
    <div className="row m-lg-5">
        <Button className="col-md-4" name="7" onClick={handleClick}>7</Button>
        <Button className="col-md-4" name="8" onClick={handleClick}>8</Button>
        <Button className="col-md-4" name="9"  onClick={handleClick}>9</Button>
        <Button className="col-md-4" name="/" onClick={handleClick}>/</Button>
        </div>
    <div className="row m-lg-5">
        <Button className="col-md-4" name="4"  onClick={handleClick}>4</Button>
        <Button className="col-md-4" name="5" onClick={handleClick}>5</Button>
        <Button className="col-md-4" name="6" onClick={handleClick}>6</Button>
        <Button className="col-md-4" name="*"onClick={handleClick}>*</Button>
        </div>
    <div className="row p-lg-5">
        <Button className="col-md-4" name="1" onClick={handleClick}>1</Button>
        <Button className="col-md-4" name="2" onClick={handleClick}>2</Button>
        <Button className="col-md-4" name="3" onClick={handleClick}>3</Button>
        <Button className="col-md-4" name="-" onClick={handleClick}>-</Button>
        </div>
    <div className="row p-lg-5">
        <Button className="col-md-4" name="AC" onClick={clear}>AC</Button>
        <Button className="col-md-4" name="0" onClick={handleClick}>0</Button>
        <Button className="col-md-4" name="=" onClick={calculate}>=</Button>
        <Button className="col-md-4" name="+" onClick={handleClick}>+</Button>
       
        </div>
        </div>
    </Form>
    </Card>
    </div>
  )
}

export default Calculator
