function add(firstValue, secondValue) {

    return (parseInt(firstValue)+parseInt(secondValue));
};
function subtract(firstValue, secondValue) {
    return (firstValue-secondValue);
};
function multiply(firstValue, secondValue) {
    return (firstValue*secondValue);
};
function divide(firstValue, secondValue) {
    if (!(secondValue == 0)) {
         return (firstValue/secondValue);
    } else {
        return "math Error"
    }
   
};

function operate(operatorUsed , firstValue, secondValue) {
    if (operatorUsed == "+") {
        return add(firstValue, secondValue)
    } else if (operatorUsed == "-") {
        return subtract(firstValue, secondValue)
    } else if (operatorUsed == "x") {
        return multiply(firstValue, secondValue)
    } else if (operatorUsed == "/") {
        return divide(firstValue, secondValue)
    } else if (operator == "" ) {
        return firstValue;
    }
} ;

let initialNumber = "";
let subsequentNumber = "";
let operator = "";

const numberButton = document.querySelectorAll(".nb");
const operatorButton = document.querySelectorAll(".ftn-btn");
const specialButton = document.querySelectorAll(".op-btn");


numberButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log(initialNumber)
        btnValue = button.textContent;
        const input = document.querySelector(".input-text");
        if (operator == "") {
            initialNumber += btnValue;
            input.textContent +=  btnValue;
        }   else {
            subsequentNumber += btnValue;
            input.textContent += btnValue;
        }
        console.log(initialNumber, operator, subsequentNumber,);
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        const result = document.querySelector(".result-text")
        const input = document.querySelector(".input-text")
        btnValue = button.textContent;
        if (operator == "") {
            operator = btnValue;
            input.textContent +=  operator;

        }  else if (!(operator == "") && (subsequentNumber == "")) {
            input.textContent =  input.textContent.slice(0,-1);
            input.textContent += btnValue;   
            operator = btnValue;   
        } else {
            result.textContent = operate(operator, initialNumber, subsequentNumber)
            initialNumber = result.textContent;
            input.textContent = result.textContent;
            subsequentNumber = "";
            operator = btnValue;
            console.log(initialNumber);
            input.textContent +=  operator;
        }
            
            
    })
})

specialButton.forEach(button => 
    button.addEventListener('click', () => {
        btnValue =  button.textContent;
        input = document.querySelector(".input-text");
        result = document.querySelector(".result-text");
        if (btnValue == "CLR") {
            initialNumber = "";
            subsequentNumber = "";
            operator = "";
            input.textContent = "";
            result.textContent = "";
        } else if (btnValue == "DEL") {
            //populate ths later
            if ((!(subsequentNumber) == "" ) && !(operator == "")){
                console.log(initialNumber)
                subsequentNumber = "";
                input.textContent =  input.textContent.slice(0,-1);
                console.log(initialNumber)
              } else if (!(operator == "") && (subsequentNumber == "")) {
                operator = "";
                input.textContent = input.textContent.slice(0,-1);
            }
            }  

         else if (btnValue == "=") {
            
            result.textContent = operate(operator, initialNumber, subsequentNumber);
            initialNumber = result.textContent;
            subsequentNumber = "";
         }
    })
)
    








//use this format to link the function
//console.log(operate(3,12,4));

