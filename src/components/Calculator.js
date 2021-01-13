import React from 'react';
import Header from './Header'
import calculator from '../services/calculator'
import Input from './Input'

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number1: 0,
            number2: 0,
            result: 0
        }
    }

    

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onClick = (event) => {
        const operation = event.target.innerText;
        let result;
        if(operation === "Add"){
            result = calculator.add(this.state.number1, this.state.number2)
        }
        else {
            result = calculator.multiply(this.state.number1, this.state.number2)
        }
        this.setState({result})
    }

    render(){
        return <div>
            <Header title={'My Calculator'} />
            <Input onChange={this.onChange} label="Enter first number 1" name="number1" value={this.state.number1}/>
            <Input onChange={this.onChange} label="Enter second number 2" name="number2" value={this.state.number2}/>
            <label>{this.state.result}</label>
            <br/>
            <button onClick={this.onClick}>Add</button>
            <button onClick={this.onClick}>Multiply</button>
        </div>
    }
}

export default Calculator;