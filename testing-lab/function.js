module.exports = {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    substract
};

//returnTwo function that returns integer

function returnTwo () {
    return (2)
}

function greeting (name) {
    if(name) {
        return (`Hello, ${name}`)
    }
    
}

function add (num1, num2) {
    return num1 + num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function substract (num1, num2) {
    return num1 - num2
}

function divide (num1, num2) {
    return num1 / num2
}