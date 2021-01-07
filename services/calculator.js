const add = (a, b) => {
    const result = Number(a) + b;
    console.log(result)
    return result
}

const multiply = (a, b) => {
    return a * b;
}

const Calculator =  { 
    add, multiply 
}

export default Calculator;