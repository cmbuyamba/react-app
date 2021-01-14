import React, { useState } from 'react';
import Header from './Header';
import calculator from '../services/calculator';
import Input from './common/input/Input';

//Hooks

const Calculator1 = () => {

const [number1, setNumber1] = useState(0);
const [number2, setNumber2] = useState(0);
const [result, setResult] = useState(0);

    const onChange = (event) => {
        if(event.target.name === "number1") {
            setNumber1(event.target.value);
        }
        else {
            setNumber2(event.target.value);
        }
    };

    const onClick = (event) => {
        const operation = event.target.innerText;
        if(operation === "Add"){
            setResult(calculator.add(number1, number2));
            
        }
        else if (operation === "Multiply") {
            setResult(calculator.multiply(number1, number2));
        }  else {
            setResult(calculator.divise(number1, number2));
        }
    };

        return <div>
            <Header title={'My Calculator'} />
            <Input onChange={onChange} label="Enter first number 1" name="number1" value={number1}/>
            <Input onChange={onChange} label="Enter second number 2" name="number2" value={number2}/>
            <label>{result}</label>
            <br/>
            <button onClick={onClick}>Add</button>
            <button onClick={onClick}>Multiply</button>
            <button onClick={onClick}>divise</button>
        </div>;
    
};

export default Calculator1;
