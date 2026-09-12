// Calculator state
let currentValue = '0';
let previousValue = null;
let operator = null;
let waitingForOperand = false;

// DOM elements
const displayText = document.querySelector('.display-text');
const resultDiv = document.querySelector('.result');

// Arithmetic functions
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
};

const operate = function (firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber);
};

// Update display
function updateDisplay() {
    displayText.textContent = currentValue;
    if (previousValue !== null && operator !== null) {
        const opSymbol = operator === add ? '+' :
                         operator === subtract ? '-' :
                         operator === multiply ? '*' : '/';
        resultDiv.textContent = previousValue + ' ' + opSymbol;
    } else {
        resultDiv.textContent = '';
    }
}

// Clear calculator state
function clear() {
    currentValue = '0';
    previousValue = null;
    operator = null;
    waitingForOperand = false;
    updateDisplay();
}

// Handle decimal point input
function inputDecimal() {
    if (waitingForOperand) {
        currentValue = '0.';
        waitingForOperand = false;
        updateDisplay();
        return;
    }
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
    updateDisplay();
}

// Handle digit input
function inputDigit(digit) {
    if (waitingForOperand) {
        currentValue = digit;
        waitingForOperand = false;
    } else {
        currentValue = currentValue === '0' ? digit : currentValue + digit;
    }
    updateDisplay();
}

// Handle operator input
function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentValue);

    if (previousValue === null) {
        previousValue = inputValue;
    } else if (operator) {
        const result = operate(previousValue, inputValue, operator);
        if (result === 'Error') {
            currentValue = 'Error';
            previousValue = null;
            operator = null;
            waitingForOperand = false;
            updateDisplay();
            return;
        }
        currentValue = String(result);
        previousValue = result;
    }

    waitingForOperand = true;
    operator = nextOperator;
    updateDisplay();
}

// Handle equals
function handleEquals() {
    if (operator === null || previousValue === null) {
        return;
    }
    const inputValue = parseFloat(currentValue);
    const result = operate(previousValue, inputValue, operator);

    if (result === 'Error') {
        currentValue = 'Error';
    } else {
        currentValue = String(result);
    }

    previousValue = null;
    operator = null;
    waitingForOperand = false;
    updateDisplay();
}

// Wire up button event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Number buttons
    document.querySelector('.btn.one').addEventListener('click', () => inputDigit('1'));
    document.querySelector('.btn.two').addEventListener('click', () => inputDigit('2'));
    document.querySelector('.btn.three').addEventListener('click', () => inputDigit('3'));
    document.querySelector('.btn.four').addEventListener('click', () => inputDigit('4'));
    document.querySelector('.btn.five').addEventListener('click', () => inputDigit('5'));
    document.querySelector('.btn.six').addEventListener('click', () => inputDigit('6'));
    document.querySelector('.btn.seven').addEventListener('click', () => inputDigit('7'));
    document.querySelector('.btn.eight').addEventListener('click', () => inputDigit('8'));
    document.querySelector('.btn.nine').addEventListener('click', () => inputDigit('9'));
    document.querySelector('.btn.zero').addEventListener('click', () => inputDigit('0'));

    // Operator buttons
    document.querySelector('.btn.add').addEventListener('click', () => handleOperator(add));
    document.querySelector('.btn.minus').addEventListener('click', () => handleOperator(subtract));
    document.querySelector('.btn.multiply').addEventListener('click', () => handleOperator(multiply));
    document.querySelector('.btn.divide').addEventListener('click', () => handleOperator(divide));

    // Equals button
    document.querySelector('.btn.equals').addEventListener('click', handleEquals);

    // Clear button
    document.querySelector('.btn.clear').addEventListener('click', clear);

    // Decimal button
    document.querySelector('.btn.decimal').addEventListener('click', inputDecimal);

    // Initialize display
    updateDisplay();
});
