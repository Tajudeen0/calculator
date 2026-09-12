function add(firstValue, secondValue) {
    return (firstValue+secondValue);
};
function subtract(firstValue, secondValue) {
    return (firstValue-secondValue);
};
function multiply(firstValue, secondValue) {
    return (firstValue*secondValue);
};
function divide(firstValue, secondValue) {
    return (firstValue/secondValue);
};
//0 = add, 1 = subtract, 2 = multiply, 3 =  divide.
function operate(operator, firstValue, secondValue) {
    if (operator == 0) {
        return add(firstValue, secondValue)
    } else if (operator == 1) {
        return subtract(firstValue, secondValue)
    } else if (operator == 2) {
        return multiply(firstValue, secondValue)
    } else if (operator == 3) {
        return divide(firstValue, secondValue)
    }
} 

console.log(operate(3,12,4));

