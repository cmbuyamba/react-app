import React from 'react';
import calculator from '../services/calculator'

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            result: 0,
            a: 0,
            b: 0
        }
    }

    onClick = () => {
        this.setState({result: calculator.add(this.state.a, this.state.b)})
    }

    onChangeA = (event) => {
        this.setState({a: event.target.value})
    }

    onChangeB = (event) => {
        this.setState({b: event.target.value})
    }

    render(){
        return <div>
            <h1>My Calculator</h1>
            <label>A </label><input type="number" onChange={this.onChangeA} value={this.state.a} />
            <br/>
            <label>B </label><input type="number" onChange={this.onChangeB} value={this.state.b} />
            <br/>
            <button onClick={this.onClick}>Calculate</button> {this.state.result}
        </div>
    }
}

export default Calculator;