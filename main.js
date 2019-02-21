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
let operations = ["+", "-", "x", "÷"];

// Get Sum
equal.addEventListener("click", () => {
  let operandArray = screenValue.textContent.split("");
  let operandValue = 0;
  let operator = "+";

  operandArray.forEach(function(n) {
    if (operations.includes(n)) {
      operator = n;
    } else {
      operandValue = n;

      if (operator == "+") {
        total += parseInt(operandValue);
      } else if (operator == "-") {
        total -= parseInt(operandValue);
      } else if (operator == "x") {
        total *= parseInt(operandValue);
      } else if (operator == "÷") {
        total /= parseInt(operandValue);
      }
    }
  });

  setScreenValue(`= ${total}`);
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

function setScreenValue(value) {
  screenValue.textContent = value;
}

// Clear screen
btnClear.addEventListener("click", () => {
  resetScreen();
  screenValue.textContent = "0";
});

// Delete button
btnDel.addEventListener("click", () => {
  let angkaScreen = screenValue.textContent;
  screenValueDisplay = angkaScreen.slice(0, angkaScreen.length - 1);
  setScreenValue(screenValueDisplay);
});
