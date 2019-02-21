let btnClear = document.getElementById("btn-clear");
let screenValue = document.getElementById("screen-value");
let btnDel = document.getElementById("btn-del");
let operands = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");

let newOperand = "";
let currentOperation;
let screenValueDisplay = "";
let total = 0;

equal.addEventListener("click", () => {
  // Get just operand from screenValue.textContent
  let operandValueArray = screenValue.textContent.split(/\+|\-|\x|\÷/);
  // Get just operator from screenValue.textContent
  let operatorsArray = screenValue.textContent.match(/\+|\-|\x|\÷/g);

  let indexValue = 1;
  total = parseInt(operandValueArray[0]);

  operatorsArray.forEach(function(operator) {
    if (operator == "+") {
      total += parseInt(operandValueArray[indexValue]);
      indexValue++;
    } else if (operator == "-") {
      total -= parseInt(operandValueArray[indexValue]);
      indexValue++;
    } else if (operator == "x") {
      total *= parseInt(operandValueArray[indexValue]);
      indexValue++;
    } else if (operator == "÷") {
      total /= parseInt(operandValueArray[indexValue]);
      indexValue++;
    }
  });

  setScreenValue(`${total}`);
});

operands.forEach(operand => {
  operand.addEventListener("click", () => {
    let operandValue = operand.textContent;
    newOperand += parseInt(operandValue);

    if (screenValueDisplay.indexOf(currentOperation) == -1) {
      screenValueDisplay = newOperand;
    } else {
      screenValueDisplay += operandValue;
    }

    setScreenValue(screenValueDisplay);
  });
});

// ============ Arithmetic Function Start ===========
function operationAdd() {
  currentOperation = "+";
  screenValueDisplay += currentOperation;
  setScreenValue(screenValueDisplay);
}

function operationSub() {
  currentOperation = "-";
  screenValueDisplay += currentOperation;
  setScreenValue(screenValueDisplay);
}

function operationDiv() {
  currentOperation = "÷";
  screenValueDisplay += currentOperation;
  setScreenValue(screenValueDisplay);
}

function operationMultiplication() {
  currentOperation = "x";
  screenValueDisplay += currentOperation;
  setScreenValue(screenValueDisplay);
}
// ============ Arithmetic Function End ===========

function resetScreen() {
  commondOperand = 0;
  newOperand = 0;
  screenValueDisplay = "";
  total = 0;
}

// Show result or operations in screenValue
function setScreenValue(value) {
  screenValue.textContent = value;
}

// Clear screen
btnClear.addEventListener("click", () => {
  resetScreen();
  screenValue.textContent = "0";
});

// Delete last operations
btnDel.addEventListener("click", () => {
  let angkaScreen = screenValue.textContent;
  screenValueDisplay = angkaScreen.slice(0, angkaScreen.length - 1);
  setScreenValue(screenValueDisplay);
  commondOperand = newOperand;
  newOperand = 0;
});
