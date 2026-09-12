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
function operate(operatorUsed, firstValue, secondValue) {
    if (operatorUsed == 0) {
        return add(firstValue, secondValue)
    } else if (operatorUsed == 1) {
        return subtract(firstValue, secondValue)
    } else if (operatorUsed == 2) {
        return multiply(firstValue, secondValue)
    } else if (operatorUsed == 3) {
        return divide(firstValue, secondValue)
    }
} ;

let initialNumber;
let subsequentNumber;
let operator;

const testButton = document.querySelectorAll(".nb");





testButton.forEach(button => {
    button.addEventListener('click', () => {
        btnValue = button.textContent;
        initialNumber = btnValue;
        console.log(initialNumber)
        const input = document.querySelector(".input-text");
        input.textContent =  initialNumber;
    })
})












//use this format to link the function
//console.log(operate(3,12,4));

