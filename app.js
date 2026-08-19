//arithmetic functions
const add = function (firstNumber, secondNumber) {
    return (firstNumber + secondNumber)
};

const subtract = function (firstNumber, secondNumber) {
    return (firstNumber - secondNumber)
};

const divide = function (firstNumber, secondNumber) {
    return (firstNumber/secondNumber)
};

const multiply = function (firstNumber, secondNumber) {
    return (firstNumber * secondNumber)
};

//calculator function
const operate = function (firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber)
}

//input variables
// const firstNumber;
// const secondNumber;
// const operation;
console.log(operate(2,4,multiply))